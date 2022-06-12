package ajax;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;

import dao.RankingDao;
import format.User;
/**
 * Servlet implementation class Ranking
 */
@WebServlet("/addranking")
public class AddRanking extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private RankingDao rankingDao;
    public AddRanking() {
        super();
        this.rankingDao = new RankingDao();
    }
    
//	랭킹 추가
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		
		HashMap<String, Boolean> data = new HashMap<String, Boolean>();
		
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("LoginOK");
		boolean isSuccess = false;
		
		int score = 0; 
		
		try {
			System.out.println(request.getParameter("score"));
			score = Integer.parseInt(request.getParameter("score"));
		} catch (Exception e) {
			data.put("result", isSuccess);
			out.print(JSONObject.toJSONString(data));
			return;
		}
		
		System.out.println("확인1" + score);
		
		if(user != null) {
			isSuccess = this.rankingDao.addRanking(user.getId(), score);	
			
			System.out.println("확인3" + score);
		}
		
		System.out.println("확인2" + score);
		
		data.put("result", isSuccess);
		out.print(JSONObject.toJSONString(data));
	}

}
