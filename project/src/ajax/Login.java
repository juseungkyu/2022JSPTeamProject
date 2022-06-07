package ajax;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import common.JDBCUtil;

@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = null;
		String password = null;
		
		try {
			id = request.getParameter("id");
			password = request.getParameter("password");
			System.out.println(password);
		} catch (Exception e) {
			System.out.println("데이터 불러오기 오류");
			e.printStackTrace();
		}
		
		if (id != null && password != null) {
			Connection conn = null;
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			String sql = "select password from Users where id=?";
			
			conn = JDBCUtil.getConnection();
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, id);
				rs = pstmt.executeQuery();
				if(rs.next()) {
					String pwd = rs.getString("password");
					if(pwd.equals(password)) {
						System.out.println(1);
						HttpSession session = request.getSession();
						session.setAttribute("LoginOK", id);
					}
				}
			} catch (SQLException e) {
				System.out.println("로그인 오류");
				e.printStackTrace();
			}
		}
		
	}

}
