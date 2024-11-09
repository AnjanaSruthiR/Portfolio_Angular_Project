import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and SCSS.',
      image: 'assets/images/portfolio.png',
      technologies: ['Angular', 'SCSS', 'HTML']
    },
    {
      title: 'E-commerce App',
      description: 'An e-commerce application with a smooth user experience and secure checkout.',
      image: 'assets/images/ecommerce.png',
      technologies: ['React', 'CSS', 'Firebase']
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for monitoring social media analytics and performance.',
      image: 'assets/images/social.png',
      technologies: ['Vue', 'JavaScript', 'D3.js']
    }
  ];
}
