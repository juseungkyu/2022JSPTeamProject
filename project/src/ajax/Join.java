package ajax;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.JDBCUtil;

@WebServlet("/join")
public class Join extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Join() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String id = null;
		String name = null;
		String nick = null;
		String email = null;
		String password = null;
		
		try {
			id = request.getParameter("id");
			name = request.getParameter("name");
			nick = request.getParameter("nick");
			email = request.getParameter("email");
			password = request.getParameter("password");
			
			
		} catch (Exception e) {
			System.out.println("데이터 불러오기 오류");
			e.printStackTrace();
		}
		
		if (id != null && name != null && nick != null && email != null && password != null) {
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
						System.out.println("아이디 중복");
						out.print("<script> history.back(); </script>");
						return;
					}
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			sql = "select email from Users where email = ?";
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, email);
				rs = pstmt.executeQuery();
				if(rs.next()) {
					if(email.equals(rs.getString("email"))) {
						System.out.println("이메일 중복");
						out.print("<script> history.back(); </script>");
						return;
					}
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
			sql = "insert into Users values(?,?,?,?,?)";
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, id);
				pstmt.setString(2, name);
				pstmt.setString(3, nick);
				pstmt.setString(4, email);
				pstmt.setString(5, password);
				pstmt.execute();
			} catch (SQLException e) {
				e.printStackTrace();
			} 
		}
	}

}
