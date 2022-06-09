CREATE table users(
	id VARCHAR2(15) NOT NULL PRIMARY KEY,
	name VARCHAR2(20) NOT NULL,
	nick VARCHAR2(40) NOT NULL,
	password VARCHAR2(80) NOT NULL
);

CREATE TABLE board(
	id NUMBER NOT NULL PRIMARY KEY,
	user_id VARCHAR2(15) NOT NULL REFERENCES Users(id),
	title VARCHAR2(20 char),
	contents VARCHAR2(255 char),
	upload_at DATE
);

CREATE TABLE ranking(
	id NUMBER NOT NULL PRIMARY KEY,
	player_id VARCHAR2(15) NOT NULL REFERENCES Users(id),
	score NUMBER NOT NULL,
	play_at DATE
);

SELECT * FROM board;
SELECT * FROM board WHERE ROWNUM >= 0 AND ROWNUM <= 0+10;

(SELECT MAX(id) FROM board)

INSERT INTO users values('id', 'pw', 'nick', 'password');
INSERT INTO board(title, contents, user_id, upload_at, id) values(?,?,?,?, NVL((SELECT MAX(id) FROM board), 0)+1 )


INSERT INTO board(title, contents, user_id, upload_at, id) values('title','content','id','2022-06-10', NVL((SELECT MAX(id) FROM board), 0)+1 )

SELECT * FROM board 
SELECT * FROM board WHERE ROWNUM > 1 AND ROWNUM <= 3 ORDER BY id DESC
SELECT * FROM board WHERE ROWNUM > 3 AND ROWNUM <= 6 ORDER BY id DESC


select * from board WHERE id BETWEEN 0 AND 2 ORDER BY id

SELECT *
FROM (SELECT rownum, id, user_id, title, contents, upload_at
        FROM board
        ORDER BY id) T
WHERE T.id BETWEEN 0 AND 2;