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
		PrintWriter out = response.getWriter();
		String id = null;
		String name = null;
		String nick = null;
		String password = null;
		
		try {
			id = request.getParameter("id");
			name = request.getParameter("name");
			nick = request.getParameter("nick");
			password = request.getParameter("password");
			
			
		} catch (Exception e) {
			e.printStackTrace();
			out.print("<script>alert('회원가입 실패')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		
		if (id == null || name == null || nick == null || password == null) {
			out.print("<script>alert('회원가입 실패')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		if (this.userdao.join(id, name, nick, password)) {
			out.print("<script>alert('회원가입 성공')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		} else {
			out.print("<script>alert('회원가입 실패')</script>");
			out.print("<script>window.location = './join.jsp' </script>");
			return;
		}
		
	}

}
