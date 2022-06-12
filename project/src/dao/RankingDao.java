package dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;

import common.JDBCUtil;
import format.Board;

public class RankingDao {
	
	private DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		
	public boolean addRanking(String playerId, int score) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "INSERT INTO ranking(id, player_id, score, play_at) VALUES(NVL((SELECT MAX(id) FROM ranking),0)+1, ?, ?, ?)";

		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, playerId);
			pstmt.setInt(2, score);
			System.out.println(Date.valueOf(LocalDate.now()).toString());
			pstmt.setString(3, Date.valueOf(LocalDate.now()).toString());
			rs = pstmt.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}

		return true;
	}
		
	public HashMap<String, ArrayList<HashMap<String,String>>> getRanking() {
		HashMap<String, ArrayList<HashMap<String,String>>> output = new HashMap<String, ArrayList<HashMap<String,String>>>();
		
		ArrayList<HashMap<String,String>> arr = new ArrayList<HashMap<String,String>>();
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from ranking ORDER BY score DESC";
		
		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				HashMap<String,String> obj = new HashMap<String,String>();

				obj.put("id", Integer.toString(rs.getInt("id")));
				obj.put("player_id", rs.getString("player_id"));
				obj.put("score", Integer.toString(rs.getInt("score")));
				
				Date date = rs.getDate("play_at");
				obj.put("play_at", dateFormat.format(date));

				arr.add(obj);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		output.put("data", arr);
		
		return output;
	}
}
