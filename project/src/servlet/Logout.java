package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import format.User;

@WebServlet("/logout")
public class Logout extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public Logout() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();

		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("LoginOK");

		if (user != null) {

			session.removeAttribute("LoginOK");
			out.print("<script>alert('로그아웃이 완료되었습니다.')</script>");
			out.print("<script>window.location.href = './login.jsp' </script>");
		} else {
			out.print("<script>alert('잘못된 접근')</script>");
			out.print("<script>window.location.href = './login.jsp' </script>");
		}
	}

}
