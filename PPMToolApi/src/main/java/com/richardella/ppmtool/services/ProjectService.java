package com.richardella.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.richardella.ppmtool.domain.Project;
import com.richardella.ppmtool.exceptions.ProjectIdException;
import com.richardella.ppmtool.repositories.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	
	public Project SaveOrUpdateProject(Project project) {
		
		try {
			
			project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
			
			return projectRepository.save(project);
		}
		catch (Exception e) {
			throw new ProjectIdException("Project Id '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
		}
		

	}
	
	public Project findProjectByIdentifier (String projectId) {

		Project project = projectRepository.findByProjectIdentifier(projectId);
		
		if (project == null) {
			throw new ProjectIdException("Project Id '" + projectId.toUpperCase() + "' does not exist");
		}
		
		return project;
	}
	

}
