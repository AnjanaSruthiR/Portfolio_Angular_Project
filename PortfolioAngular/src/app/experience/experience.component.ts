import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList = [
    {
      title: "Security Engineer",
      company: "Accenture",
      dates: "May 23 - Jul 24",
      description: "Enhanced IAM capabilities, implemented SSO, and optimized security protocols."
    },
    {
      title: "Mobile Application Developer",
      company: "Accenture",
      dates: "Dec 22 - Apr 23",
      description: "Worked on front-end development, improved UI/UX design, and optimized performance."
    },
    {
      title: "Web Application Developer",
      company: "Accenture",
      dates: "Oct 22 - Dec 23",
      description: "Worked on front-end development, improved UI/UX design, and optimized performance."
    }
  ];
}
