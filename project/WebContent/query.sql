CREATE table users(
	id VARCHAR(15) NOT NULL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	nick VARCHAR(40) NOT NULL,
	password VARCHAR(80) NOT NULL
);

CREATE TABLE board(
	id NUMBER NOT NULL PRIMARY KEY,
	user_id VARCHAR(15) NOT NULL REFERENCES Users(id),
	title VARCHAR(30),
	contents VARCHAR(255),
	upload_at DATE
);

CREATE TABLE ranking(
	id NUMBER NOT NULL PRIMARY KEY,
	player_id VARCHAR(15) NOT NULL REFERENCES Users(id),
	score NUMBER NOT NULL,
	play_at DATE
);

drop table Users;

select * from Users;
delete from Ranking where id=1;

insert into Users values('test', 'ttt', 'tttt', '222@mail.com', '1234');
