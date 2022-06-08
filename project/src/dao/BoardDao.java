package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import common.JDBCUtil;
import format.Board;

public class BoardDao {
	public BoardDao() {
		// TODO Auto-generated constructor stub
	}
	
	public ArrayList<Board> getBoardList(int start, int count) {
		ArrayList<Board> boardList = new ArrayList<Board>();
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from board LIMIT ?, ?";
		
		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, start);
			pstmt.setInt(2, count);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				int id = rs.getInt("id");
				String userId = rs.getString("user_id");
				String title = rs.getString("title");
				String contents = rs.getString("contents");
				Date uploadAt = rs.getDate("upload_at");
				
				boardList.add(new Board(id, userId, title, contents, uploadAt));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return boardList;
	}
}
