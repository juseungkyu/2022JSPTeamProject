CREATE table users(
	id VARCHAR2(15) NOT NULL PRIMARY KEY,
	name VARCHAR2(20) NOT NULL,
	nick VARCHAR2(40) NOT NULL,
	password VARCHAR2(80) NOT NULL
);

CREATE TABLE board(
	id NUMBER NOT NULL PRIMARY KEY,
	user_id VARCHAR2(15) NOT NULL REFERENCES Users(id),
	title VARCHAR2(30 char),
	contents VARCHAR2(255 char),
	upload_at DATE
);

CREATE TABLE ranking(
	id NUMBER NOT NULL PRIMARY KEY,
	player_id VARCHAR2(15) NOT NULL REFERENCES Users(id),
	score NUMBER NOT NULL,
	play_at DATE
);

drop table Users;

select * from Users;
delete from Ranking where id=1;

insert into Users values('test', 'ttt', 'tttt', '222@mail.com', '1234');
