package com.richardella.ppmtool.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;	

@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message = "Project name is required")
	private String projectName;
	@NotBlank(message = "Project identifier is required")
	@Size(min = 4, max = 5, message = "Project identifier should be 4 or 5 characters")
	@Column(updatable = false, unique = true)
	private String projectIdentifier;
	@NotBlank(message = "Project description is required")
	private String description; 
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date startDate;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date endDate;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date createdDate;
	@JsonFormat(pattern = "yyyy-mm-dd")
	private Date updatedDate;
	
	@PrePersist 
	protected void onCreate() {
		this.createdDate = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedDate = new Date();
	}

	public Project() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectIdentifier() {
		return projectIdentifier;
	}

	public void setProjectIdentifier(String projectIdentifier) {
		this.projectIdentifier = projectIdentifier;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}
	
	
	
	
	
}
