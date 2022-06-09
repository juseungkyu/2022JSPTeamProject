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
        	String idx = (String) request.getParameter("idx");
        	int i = 0;
        	
        	try{
        		i = Integer.parseInt(idx); 
        	} catch(Exception e) {
        		i = 0;
        	}
        	
        	ArrayList<Board> boardList = boardDao.getBoardList(i*3, 3);
        	
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
                	<%
                		if(i-1 >= 0){	
                	%>
                		<a href="/board.jsp?idx=<%=i-1%>" class="btn-1">뒤로가기</a>
                	<%
                		}
                	%>
                	
                	<%
                		if(i+1 <= boardDao.getCount() / 3){	
                	%>
                		<a href="/board.jsp?idx=<%=i+1%>" class="btn-1">앞으로가기</a>
                	<%
                		}
                	%>
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

