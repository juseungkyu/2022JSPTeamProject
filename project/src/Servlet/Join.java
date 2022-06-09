package Servlet;

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
import dao.UserDao;

@WebServlet("/join")
public class Join extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserDao userdao;
       
    public Join() {
        super();

        this.userdao = new UserDao(); 
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		String id = null;
		String name = null;
		String nick = null;
		String password = null;
		String passwordRe = null;
		
		try {
			id = request.getParameter("id");
			name = request.getParameter("name");
			nick = request.getParameter("nick");
			password = request.getParameter("password");
			passwordRe = request.getParameter("re-password");
			if(!password.equals(passwordRe)) {
				out.print("<script>alert('비밀번호 확인을 확인해주십시오')</script>");
				out.print("<script>window.location = './join.jsp' </script>");
				return;
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
			out.print("<script>alert('회원가입 실패')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		
		if (id == null || name == null || nick == null || password == null) {
			out.print("<script>alert('필수 입력값이 누락되었습니다.')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		if (this.userdao.join(id, name, nick, password)) {
			out.print("<script>alert('회원가입 성공')</script>");
			out.print("<script>window.location = '/' </script>");
			return;
		} else {
			out.print("<script>alert('회원가입 실패')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		
	}

}
