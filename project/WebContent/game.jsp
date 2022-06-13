<%@page import="format.User"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	User user = (User) session.getAttribute("LoginOK");

	if(user == null){
		out.print("<script>alert('로그인 후 이용해주세요')</script>");
		out.print("<script>window.location.href = './login.jsp' </script>");
	}
%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>game</title>
    <link rel="stylesheet" href="./resources/css/basic.css">
    <link rel="stylesheet" href="./resources/css/game.css">

	<!-- 자료구조 -->
    <script src="/resources/js/dataStructure/SpriteList.js"></script>

    <!-- 유틸함수 -->
    <script src="/resources/js/util/util.js"></script>
    <script src="/resources/js/util/globalValue.js"></script>
    <script src="/resources/js/util/localstorage.js"></script>
    <script src="/resources/js/util/domControl.js"></script>
    <script src="/resources/js/util/collisionCheck.js"></script>

    <!-- 시작 -->
    <script src="/resources/js/game/App.js" type='module'></script>

    <style>

		.align-center {
			width : 100%;
			height : 100%;
    		justify-content: center;
		}

        body {
        	background-color: rgba(39, 0, 0, 0.9);
            height: 100vh;
            overflow: hidden;
            padding-bottom: 0px;
        }
    </style>
</head>

<body>

    <div class="ranking-popup popup">
        <div>
            <h2>내 점수 : 1</h2>
            <table class="ranking">
                <thead>
                    <tr>
                        <th>등수</th>
                        <th>아이디</th>
                        <th>점수</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>미쿠사랑꾼</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>

            <div class="just-center gap-30">
                <a href="/game.jsp" class="btn-1">다시하기</a>
                <a href="/" class="btn-1">메인페이지로</a>
            </div>
        </div>
    </div>

    <div class="select-game popup">
        <div>
            <div>
                <button class="btn-2 basic-mode">모험모드</button>
                <button class="btn-2 boss-mode">보스모드</button>
            </div>
        </div>
    </div>

    <div class="front-ground"></div>

    <div class="align-center">
        <section id="game">
            <div id="ui">
                <div id="play-state">
                    <div class="stage"> 
                        <span>1</span>
                    </div>
                    <div>
                        <div class="hp">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="count">
                            <span>0발</span>
                        </div>
                    </div>
                </div>
                <div id="miku">   
                    <img src="./resources/image/player/1.png" alt="image" title="image">
                </div>
            </div>
            <div id="gameBox"></div>
        </section>
    </div>
</body>

</html>