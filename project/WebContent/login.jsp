<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/basic/header.jsp" %>

	<div class="login-container">
        <h2>로그인 <span>Login</span></h2>
        <hr>
        <form class="loginForm" action="/login" method="post">
            <div class="inp-box">
                <p>아이디</p>
                <input type="text" name="id" id="" placeholder="아이디" required>
            </div>
            <div class="inp-box">
                <p>비밀번호</p>
                <input type="password" name="password" id="" placeholder="비밀번호" required>
            </div>
            <div class="btn-box">
                <input type="submit" value="로그인" class="loginBtn">
                <input type="button" value="취소하기" class="cancelBtn">
            </div>

        </form>
    </div>
<%@ include file="/basic/footer.jsp" %>