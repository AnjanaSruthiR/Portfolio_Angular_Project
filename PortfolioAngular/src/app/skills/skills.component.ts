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
        { name: 'HTML5', icon: 'html5-plain' },
        { name: 'CSS3', icon: 'css3-plain' },
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
        { name: 'ServiceNow (SNOW)', icon: 'assets/ServiceNow.png' },
        { name: 'Docker', icon: 'docker-plain' },
        { name: 'Power BI', icon: 'assets/Power_BI.svg' },
        { name: 'NetBeans', icon: 'assets/NetBeans.svg.png' },
        { name: 'Azure Data Studio', icon: 'assets/azure-data-studio.png' },
        { name: 'Android Studio', icon: 'androidstudio-plain' },
        { name: 'VS Code', icon: 'assets/Visual_Studio_Code.svg.webp' },
        { name: 'MS Excel', icon: 'assets/Microsoft_Office_Excel.svg.webp' },
        { name: 'GitHub', icon: 'github-original' },
        { name: 'Bitbucket', icon: 'bitbucket-original' },
        { name: 'O365', icon: 'assets/Microsoft_365.svg.png' }
      ]
    }
  ];
}
