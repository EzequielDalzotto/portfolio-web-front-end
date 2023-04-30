import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects)=>[
      this.projects = projects
    ])
  }
}
