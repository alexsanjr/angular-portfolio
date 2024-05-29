import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Técnico de Suporte Junior',
        p: 'Algar | fev 2019 - Present',
      },
      text: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate minus eos a excepturi hic tempora corrupti, laboriosam necessitatibus ea consequuntur nulla quis numquam beatae ipsa, ducimus nesciunt repudiandae maxime recusandae!</p>',
    },
    {
      summary: {
        strong: 'Técnico de Suporte',
        p: 'Freelance',
      },
      text: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate minus eos a excepturi hic tempora corrupti, laboriosam necessitatibus ea consequuntur nulla quis numquam beatae ipsa, ducimus nesciunt repudiandae maxime recusandae!</p>',
    },
  ]);
}
