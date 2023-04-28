import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-projects-panel',
  templateUrl: './projects-panel.component.html',
  styleUrls: ['./projects-panel.component.css']
})
export class ProjectsPanelComponent {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    this.projectsService.getEducations().subscribe((projects)=>[
      this.projects = projects
    ])
  }

}
