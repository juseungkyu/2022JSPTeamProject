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
import javax.servlet.http.HttpSession;

import common.JDBCUtil;
import dao.UserDao;
import format.User;

@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userdao;
	public Login() {
		super();
		
		userdao = new UserDao();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = null;
		String password = null;
		PrintWriter out = response.getWriter();
		try {
			id = request.getParameter("id");
			password = request.getParameter("password");
			System.out.println(password);
		} catch (Exception e) {
			System.out.println("데이터 불러오기 오류");
			out.print("<script>alert('로그인 실패')</script>");
			out.print("<script>window.location = './login.jsp' </script>");
		}

		if (id == null || password == null) {
			return;
		}
		User user = this.userdao.loginCheck(id, password);
		if(user != null) {
			HttpSession session = request.getSession();
			session.setAttribute("LoginOK", user);	
		} 
		

	}

}
