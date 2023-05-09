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
  onAdding: boolean = false;


  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects)=>[
      this.projects = projects
    ])
  }

  toggleOnAdding(){
    this.onAdding =! this.onAdding;
  }

  saveProject(project:Project){
    this.projectsService.updateProject(project).subscribe();
    alert("Experiencia Modificada")
  }

  addProject(project:Project){
    this.projectsService.addProject(project).subscribe((project)=>[
      this.projects.push(project)
    ])
    this.toggleOnAdding()
  }

  removeProject(project:Project){
    this.projectsService.deleteProject(project).subscribe(()=>[
      this.projects = this.projects.filter( (p) => p.id !== project.id)
    ])
    alert(project.titulo + ": Removida")
  }
}
