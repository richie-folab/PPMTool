package com.richardella.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richardella.ppmtool.domain.Project;
import com.richardella.ppmtool.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	
	public Project SaveOrUpdateProject(Project project) {
		
		//TODO: Logic
		
		return projectRepository.save(project);
	}
	

}
