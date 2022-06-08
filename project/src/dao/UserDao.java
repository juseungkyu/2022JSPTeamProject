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
	
	public User loginCheck(String id, String pw) {
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from Users where id=?";

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
}
