<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/basic/header.jsp" %>

<!-- 글 쓰기 -->
	<div class="join-container">
        <h2>글쓰기 <span>write</span></h2>
        <hr>
        <form class="joinForm" action="/boardwrite" method="post">
            <div class="inp-box">
                <p>제목</p>
                <input type="text" name="title" id="" placeholder="제목">
            </div>
            <div class="inp-box">
                <p>내용</p>
                <textarea rows="20" cols="50" name="contents"></textarea>
            </div>
            <div class="btn-box">
                <input type="submit" value="글 작성" class="joinBtn">
                <input type="button" value="취소하기" class="cancelBtn">
            </div>

        </form>
    </div>
<!-- 글 쓰기 -->
<%@ include file="/basic/footer.jsp" %>