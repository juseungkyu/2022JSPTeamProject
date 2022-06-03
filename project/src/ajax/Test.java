package ajax;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.JDBCUtil;


@WebServlet("/Test")
public class Test extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Test() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int score = 0;
		String player_id = null;
		Date date = new Date(0);
		
		try {
			request.setCharacterEncoding("UTF-8");
			response.setContentType("text/html; charset=UTF-8");
			
			score = (Integer) Integer.parseInt(request.getParameter("score"));
			player_id = request.getParameter("player_id");
			date = new Date(System.currentTimeMillis());
			
		} catch (Exception e) {
			System.out.println("데이터 타입 오류");
			e.printStackTrace();
		}
		
		if (player_id != null && date != new Date(0)) {
			Connection conn = null;
			PreparedStatement pstmt = null;
			String sql = "insert into ranking values(?, ?, ?, ?)";
			
			conn = JDBCUtil.getConnection();
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, score);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		
		
		
	}

}
