import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceList = [
    {
      title: "Application Developer",
      company: "Accenture",
      dates: "2022 - Present",
      description: "Enhanced IAM capabilities, implemented SSO, and optimized security protocols."
    },
    {
      title: "Software Engineer Intern",
      company: "XYZ Corporation",
      dates: "Summer 2021",
      description: "Worked on front-end development, improved UI/UX design, and optimized performance."
    }
  ];
}
