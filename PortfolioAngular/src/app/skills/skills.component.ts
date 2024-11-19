import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: 'javascript-plain' },
        { name: 'Python', icon: 'python-plain' },
        { name: 'Java', icon: 'java-plain' }
      ]
    },
    {
      name: 'Frameworks',
      items: [
        { name: 'Angular', icon: 'angularjs-plain' },
        { name: 'React', icon: 'react-original' },
        { name: 'Node.js', icon: 'nodejs-plain' }
      ]
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Git', icon: 'git-plain' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'AWS', icon: 'amazonwebservices-plain' }
      ]
    }
  ];
}
