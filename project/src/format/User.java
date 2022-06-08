package format;

public class User {
	
	public User(boolean isLogin, String id, String name, String nickname) {
		this.isLogin = isLogin;
		this.id = id;
		this.name = name;
		this.nickname = nickname;
	}

	private boolean isLogin;
	private String id;
	private String name;
	private String nickname;
	
	public boolean isLogin() {
		return isLogin;
	}
	public void setLogin(boolean isLogin) {
		this.isLogin = isLogin;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	
	
}
