package common;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;

public class SQLcommand {

	// 번호 순서대로 자동생성 기능
	// 테이블에서 해당 컬럼의 번호를 순서대로 받아와 없는 번호를 리턴
	public static int autoInc(String id, String table) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select "+ id +" from "+ table + " order by " + id;
		
		conn = JDBCUtil.getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			ArrayList<Integer> list = new ArrayList<>();
			while(rs.next()) {
				list.add(rs.getInt(id));
			}
			if(list.isEmpty()) {
				return 0;
			}
			for (int i = 0; i < list.size(); i++) {
				if(i != list.get(i)) {
					return(i);
				}
			}
			return list.size();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			JDBCUtil.close(conn, pstmt, rs);
		}
		
		return(-1);
	}
}
