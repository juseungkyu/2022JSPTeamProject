package ajax;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.JDBCUtil;
import common.SQLcommand;


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
		int id = -1;
		
		try {
			request.setCharacterEncoding("UTF-8");
			response.setContentType("text/html; charset=UTF-8");
			
			score = (Integer) Integer.parseInt(request.getParameter("score"));
			player_id = request.getParameter("player_id");
			date = new Date(System.currentTimeMillis());
			id = SQLcommand.autoInc("id", "Ranking");
			System.out.println(player_id);
			
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
				pstmt.setInt(1, id);
				pstmt.setString(2, player_id);
				pstmt.setInt(3, score);
				pstmt.setDate(4, date);
				pstmt.execute();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		PrintWriter out = response.getWriter();
		out.print("<html> <head> <title> test </title> </head> <body>");
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		String sql = "select * from Ranking order by score desc";
		
		conn = JDBCUtil.getConnection();
		try {
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()){
				out.print(rs.getString("player_id") + " : " + rs.getInt("score") + "<br>");
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		out.print("</body> </html>");
		
		
		
		
		
		
	}

}
