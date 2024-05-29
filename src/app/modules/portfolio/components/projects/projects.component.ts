import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida Fullstack',
      width: '100px',
      height: '51px',
      descripition:
        '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate minus eos a excepturi hic tempora corrupti, laboriosam necessitatibus ea consequuntur nulla quis numquam beatae ipsa, ducimus nesciunt repudiandae maxime recusandae!</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ],
    },
  ]);
}
