<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ include file="/basic/header.jsp" %>

	<div class="join-container">
        <h2>회원가입 <span>Sign up</span></h2>
        <hr>
        <form class="joinForm" action="/join" method="post">
            <div class="inp-box">
                <p>아이디</p>
                <input type="text" name="id" id="" placeholder="아이디" required>
            </div>
            <div class="inp-box">
                <p>비밀번호</p>
                <input type="password" name="password" id="" placeholder="비밀번호" required>
            </div>
            <div class="inp-box">
                <p>비밀번호 확인</p>
                <input type="password" name="re-password" id="" placeholder="비밀번호 확인" required>
            </div>
            <div class="inp-box">
                <p>이름</p>
                <input type="text" name="name" id="" placeholder="이름" required>
            </div>
            <div class="inp-box">
                <p>닉네임</p>
                <input type="text" name="nick" id="" placeholder="닉네임" required>
            </div>
            <div class="btn-box">
                <input type="submit" value="가입완료" class="joinBtn">
                <input type="reset" value="초기화" class="cancelBtn">
            </div>

        </form>
    </div>
<%@ include file="/basic/footer.jsp" %>