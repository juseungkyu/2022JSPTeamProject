package common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;

public class SQLcommand {

	public static int autoInc(String id, String table) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select "+ id +" from "+ table;
		
		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			ArrayList<Integer> list = new ArrayList<>();
			while(rs.next()) {
				list.add(rs.getInt(id));
			}
			for (int i = 0; i < list.size(); i++) {
				if(i != list.get(i)) {
					return(i);
				}
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JDBCUtil.close(conn, pstmt);
		}
		
		return(-1);
	}
}
