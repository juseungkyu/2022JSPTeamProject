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
@WebServlet("/ranking")
public class Ranking extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private RankingDao rankingDao;
    public Ranking() {
        super();
        this.rankingDao = new RankingDao();
    }
    
// 랭킹 불러오기
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		HashMap<String, ArrayList<HashMap<String, String>>> data = this.rankingDao.getRanking();
		JSONObject jObject = new JSONObject(data);
		
		response.setContentType("application/json");
		out.print(jObject.toJSONString());
	}
	
//	랭킹 추가
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		
		HashMap<String, Boolean> data = new HashMap<String, Boolean>();
		
		HttpSession session = request.getSession();
		User user = (User) session.getAttribute("LoginOK");
		boolean isSuccess = false;
		
		int score = 0; 
		
		try {
			score = Integer.parseInt(request.getParameter("score"));
		} catch (Exception e) {
			data.put("result", isSuccess);
			out.print(JSONObject.toJSONString(data));
			return;
		}
		
		if(user != null) {
			isSuccess = this.rankingDao.addRanking(user.getId(), score);	
		}

		data.put("result", isSuccess);
		out.print(JSONObject.toJSONString(data));
	}

}
