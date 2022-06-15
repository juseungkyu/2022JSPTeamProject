<%@page import="dao.RankingDao"%>
<%@page import="dao.BoardDao"%>
<%@page import="format.Board"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/basic/header.jsp" %>

<%
	BoardDao boardDao = new BoardDao();
	int i = 0;
	// 게시글 받아와서 리스트에 저장
	ArrayList<Board> boardList = boardDao.getBoardList(0, 4);
	
	// 로그인 여부 확인
	user = (User) session.getAttribute("LoginOK");
	boolean log = false;
	if(user != null) {
		log = true;
	}
	
	
%>
    <section class="aaa container">
        <div class="visual">
            <img src="./resources/image/visual/zzz.jpg" alt="">
        </div>
        <div class="right">
            <a href="/game.jsp" class="start">
                <p>GAME <br>START</p>
            </a>
            <div class="info">
<%
			if(log) {
				RankingDao rankingDao = new RankingDao();
				int score = rankingDao.getMyRanking(user.getId());
%>	               
                <div class="profile"></div>
	                <div class="profile-info">
	                    <p class="name"><%= user.getNickname() %> <span>님</span></p>
	                    <p class="one">최고점수: <%= score %>점</p>
	                    <p class="logout"><a href="">로그아웃</a></p>
	                </div>
            	</div>
<%
			} else {
%>		                
				<div class="profile-login">	                 
                    <div>
                    	<a href="/login.jsp"><button>로그인</button></a>
                   		<a href="/join.jsp"><button>회원가입</button></a>
                    </div>
                </div>
<%
			}
%>		                
        </div>
    </section>


 
	<section>
	    <div class="ddd"></div>
	    <div class="eee">
	        <h2>커뮤니티 최신글</h2>
	        <div class="container posts">
<%
			// 게시글 출력
			// 게시글이 4개보다 적은 경우에는 기본 구조를 출력
			Board board = null;
			if(boardList.size() > 0) {
				board = boardList.get(0);	
%>	        
	            <div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5><%=board.getTitle()%></h5>
	                    <hr>
	                    <div>
	                        <p><%=board.getContent()%></p>
	                    </div>
	                </div>
	            </div>
<%
			} else {
%>
				<div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5>제목</h5>
	                    <hr>
	                    <div>
	                        <p>내용</p>
	                    </div>
	                </div>
	            </div>
<%	
			}
			if(boardList.size() > 1) {
				board = boardList.get(1);
%>	  	            
	            <div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5><%=board.getTitle()%></h5>
	                    <hr>
	                    <div>
	                        <p><%=board.getContent()%></p>
	                    </div>
	                </div>
	            </div>
<%
			} else {
%>
				<div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5>제목</h5>
	                    <hr>
	                    <div>
	                        <p>내용</p>
	                    </div>
	                </div>
	            </div>
<%	
			}
			if(boardList.size() > 2) {
				board = boardList.get(2);
%>	  	     	            
	            <div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5><%=board.getTitle()%></h5>
	                    <hr>
	                    <div>
	                        <p><%=board.getContent()%></p>
	                    </div>
	                </div>
	            </div>
<%
			} else {
%>
				<div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5>제목</h5>
	                    <hr>
	                    <div>
	                        <p>내용</p>
	                    </div>
	                </div>
	            </div>
<%	
			}
			if(boardList.size() > 3) {
				board = boardList.get(3);
%>	  	     	            
	            <div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5><%=board.getTitle()%></h5>
	                    <hr>
	                    <div>
	                        <p><%=board.getContent()%></p>
	                    </div>
	                </div>
	            </div>
<%	            
			} else {
%>
				<div class="post">
	                <div>
	                    <p>[자유게시판]</p>
	                    <h5>제목</h5>
	                    <hr>
	                    <div>
	                        <p>내용</p>
	                    </div>
	                </div>
	            </div>	            
	        </div>
	    </div>
	</section>
<%
			}
%>

<%@ include file="/basic/footer.jsp" %>
