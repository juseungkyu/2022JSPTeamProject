package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
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
	
	// 로그인 조건 확인
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String id = null;
		String password = null;
		PrintWriter out = response.getWriter();
		
		try {
			id = request.getParameter("id");
			password = request.getParameter("password");
		} catch (Exception e) {
			out.print("<script>alert('로그인 실패')</script>");
			out.print("<script>window.location.href = './login.jsp' </script>");
			return;
		}

		if (id == null || password == null) {
			out.print("<script>alert('로그인 실패')</script>");
			out.print("<script>window.location.href = './login.jsp' </script>");
			return;
		}
		User user = this.userdao.loginCheck(id, password);
		
		if(user != null) {
			HttpSession session = request.getSession();
			session.setAttribute("LoginOK", user);
			out.print("<script>alert('로그인 성공')</script>");
			out.print("<script>window.location.href = '/' </script>");
		} else {
			out.print("<script>alert('로그인 실패')</script>");
			out.print("<script>window.location.href = './login.jsp' </script>");
			return;
		}
		

	}

}
