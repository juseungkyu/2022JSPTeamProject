<%@page import="java.util.ArrayList"%>
<%@page import="format.Board"%>
<%@page import="dao.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/basic/header.jsp" %>

    <!-- 메인 컨텐츠 -->
    <div class="design-helper container just-between">
        <!-- 게시판 -->
        <section id="board">
        	<%
        	BoardDao boardDao = new BoardDao();
        	Object idx = request.getAttribute("idx");
        	int i = 0;
        	
        	try{
        		i = (int)idx; 
        	} catch(Exception e) {
        		i = 0;
        	}
        	
        	ArrayList<Board> boardList = boardDao.getBoardList(i*10, 10);
        	
        	for(int index = 0; index < boardList.size(); index++){
        		Board board = boardList.get(index);
        	%>
			<div class="board">
				<div class="title">
					<h3><%=board.getTitle()%></h3>
					<div class="info">
						<div><p>작성자 : <%=board.getUserId()%></p></div>
						<div><p>작성일 : <%=board.getUploadAt()%></p></div>
					</div>
				</div>
				<div class="body">
					<%=board.getContent()%>
				</div>
			</div>
 			<%
        	}
 			%>
            
            <div class="pagecontroller">
                <div>
                    <!-- 뒤로가기 -->
                    <a href="#" class="btn-1">〈</a>
                
                	<%
                	for(int index = i%10; index < i%10+10 && index < i%10 + boardList.size(); i++){
                		%><a href="<%=index%>" class="btn-1"><%=index+1%></a><%
                	}
                	%>
                
                    <!-- 앞으로 가기 -->
                    <a href="#" class="btn-1">〉</a>
                </div>
            </div>
        </section>
        <!-- 게시판 -->

        <!-- 회원정보 -->
        <section id="login">
            <form action="/login" method="post">
                
            </form>
        </section>
        <!-- 회원정보 -->
    </div>
    <!-- 메인 컨텐츠 -->
    
<%@ include file="/basic/footer.jsp" %>

