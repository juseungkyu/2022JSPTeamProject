package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import dao.BoardDao;
import format.User;

@WebServlet("/boardwrite")
public class BoardWrite extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private BoardDao boardDao;
    public BoardWrite() {
        super();
        this.boardDao = new BoardDao();
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		HttpSession session = request.getSession();
		Object user = session.getAttribute("LoginOK");

		PrintWriter out = response.getWriter();
		
		if(user == null) {
			out.print("<script>alert('로그인 후 이용해주세요')</script>");
			out.print("<script>window.location.href = '/login.jsp' </script>");
			return;
		}
		
		String title = null;
		String contents = null;
		
		try {
			title = request.getParameter("title");
			contents = request.getParameter("contents");
		} catch (Exception e) {
			out.print("<script>alert('글 쓰기 실패')</script>");
			out.print("<script>window.history.back() </script>");
			return;
		}

		if (title == null || contents == null) {
			out.print("<script>alert('필수 입력 값이 누락 되었습니다.')</script>");
			out.print("<script>window.history.back() </script>");
			return;
		}
		
		if(title == "" || contents == "") {
			out.print("<script>alert('필수 입력 값이 누락 되었습니다.')</script>");
			out.print("<script>window.history.back() </script>");
			return;
		}
		
		if(title.length() > 20 || contents.length() > 255) {
			out.print("<script>alert('제목은 20자, 내용은 255자까지 입력 가능합니다.')</script>");
			out.print("<script>window.history.back() </script>");
			return;
		}
		
		if(this.boardDao.addBoard(title, contents, (User) user)) {
			out.print("<script>alert('글 쓰기 성공')</script>");
			out.print("<script>window.location.href = '/board.jsp' </script>");
			return;
		}
		
		out.print("<script>alert('글 쓰기 실패')</script>");
		out.print("<script>window.history.back() </script>");
		return;
	}

}
