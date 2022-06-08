package format;

import java.sql.Date;

public class Board {
	int id;
	String userId;
	String title;
	String content;
	Date uploadAt;
	
	public Board(int id, String userId,	String title, String content, Date uploadAt) {
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.content = content;
		this.uploadAt = uploadAt ;
	}
}
