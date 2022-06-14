package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.http.HttpSession;

import common.JDBCUtil;
import format.User;

public class UserDao {
	public UserDao() {
		
	}
	
	// 로그인 기능
	public User loginCheck(String id, String pw) {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from users where id=?";

		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			if (rs.next()) {
				String pwd = rs.getString("password");
				String name = rs.getString("name");
				String nick = rs.getString("nick");
				if (pwd.equals(pw)) {
					return new User(true, id, name, nick);
				}
			}
		} catch (SQLException e) {
			System.out.println("로그인 오류");
			e.printStackTrace();
		}
		
		return null;
	}
	
	// 회원가입 기능
	public boolean join(String id, String name, String nick, String password) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		conn = JDBCUtil.getConnection();
		String sql = "select id from Users where id = ?";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			rs = pstmt.executeQuery();
			if(rs.next()) {
				if (id.equals(rs.getString("id"))) {
					return false;
				}
			}
		} catch (SQLException e) {
			return false;
		}
		sql = "insert into Users values(?,?,?,?)";
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, id);
			pstmt.setString(2, name);
			pstmt.setString(3, nick);
			pstmt.setString(4, password);
			pstmt.execute();
		} catch (SQLException e) {
			return false;
			
		} 
		
		return true;
		
	}
}
