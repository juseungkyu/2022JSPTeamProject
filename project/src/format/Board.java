package format;

import java.sql.Date;

public class Board {
	private int id = -1;
	private String userId = "";
	private String title = "";
	private String content = "";
	private Date uploadAt = null;
	
	public Board(int id, String userId,	String title, String content, Date uploadAt) {
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.content = content;
		this.uploadAt = uploadAt ;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getUploadAt() {
		return uploadAt;
	}

	public void setUploadAt(Date uploadAt) {
		this.uploadAt = uploadAt;
	}
}
