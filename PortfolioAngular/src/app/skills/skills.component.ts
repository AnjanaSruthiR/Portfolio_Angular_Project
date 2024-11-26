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
      name: 'Frontend Development',
      items: [
        { name: 'HTML', icon: 'html5-plain' },
        { name: 'CSS', icon: 'css3-plain' },
        { name: 'SASS', icon: 'sass-original' },
        { name: 'Bootstrap', icon: 'bootstrap-plain' },
        { name: 'AngularJS', icon: 'angularjs-plain' }
      ]
    },
    {
      name: 'Backend Development',
      items: [
        { name: 'Node.js', icon: 'nodejs-plain' },
        { name: 'ExpressJS', icon: 'express-original' }
      ]
    },
    {
      name: 'Databases',
      items: [
        { name: 'MongoDB', icon: 'mongodb-plain' },
        { name: 'MySQL', icon: 'mysql-plain' }
      ]
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Figma', icon: 'figma-plain' },
        { name: 'Jira', icon: 'jira-plain' },
        { name: 'ServiceNow (SNOW)', icon: 'servicenow-plain' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Power BI', icon: 'assets/icons/powerbi.svg' },
        { name: 'NetBeans', icon: 'assets/icons/netbeans.svg' },
        { name: 'Azure Data Studio', icon: 'assets/icons/azuredatastudio.svg' },
        { name: 'Android Studio', icon: 'androidstudio-plain' },
        { name: 'VS Code', icon: 'visualstudiocode-plain' },
        { name: 'MS Excel', icon: 'msexcel-plain' },
        { name: 'GitHub', icon: 'github-original' },
        { name: 'Bitbucket', icon: 'bitbucket-original' },
        { name: 'O365', icon: 'microsoftoffice-plain' }
      ]
    }
  ];
}
