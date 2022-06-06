CREATE table Users(
	id VARCHAR(15) NOT NULL PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	nick VARCHAR(40) NOT NULL,
	email VARCHAR(40) NOT NULL UNIQUE,
	password VARCHAR(80) NOT NULL
);

CREATE TABLE Notice(
	id NUMBER NOT NULL PRIMARY KEY,
	user_id VARCHAR(15) NOT NULL REFERENCES Users(id),
	title VARCHAR(100),
	contents VARCHAR(2000),
	upload_at DATE
);

CREATE TABLE Community(
	id NUMBER NOT NULL PRIMARY KEY,
	user_id VARCHAR(15) NOT NULL REFERENCES Users(id),
	title VARCHAR(100),
	category VARCHAR(20) NOT NULL,
	contents VARCHAR(2000),
	upload_at DATE
);

CREATE TABLE Ranking(
	id NUMBER NOT NULL PRIMARY KEY,
	player_id VARCHAR(15) NOT NULL REFERENCES Users(id),
	score NUMBER NOT NULL,
	play_at DATE
);

drop table Users;

select * from Ranking;
delete from Ranking where id=1;

insert into Users values('test', 'ttt', 'tttt', '222@mail.com', '1234');
