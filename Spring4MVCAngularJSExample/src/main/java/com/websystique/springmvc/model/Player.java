package com.websystique.springmvc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "players")
public class Player {

	@Id
	@GeneratedValue
	private int player_id;

	@Column(name = "player_name")
	private String player_name;

	@Column(name = "player_team")
	private String player_team;

	@Column(name = "player_club")
	private String player_club;

	public int getPlayer_id() {
		return player_id;
	}

	public void setPlayer_id(int player_id) {
		this.player_id = player_id;
	}

	public String getPlayer_name() {
		return player_name;
	}

	public void setPlayer_name(String player_name) {
		this.player_name = player_name;
	}

	public String getPlayer_team() {
		return player_team;
	}

	public void setPlayer_team(String player_team) {
		this.player_team = player_team;
	}

	public String getPlayer_club() {
		return player_club;
	}

	public void setPlayer_club(String player_club) {
		this.player_club = player_club;
	}

	@Override
	public String toString() {
		return "Player [id=" + player_id + ", player_name=" + player_name + ", player_team=" + player_team + ", player_club=" + player_club + "]";
	}

}
