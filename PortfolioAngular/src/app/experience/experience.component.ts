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
      description: "Designed and implemented advanced IAM solutions, integrated SSO protocols, and streamlined security measures to enhance application reliability and safeguard user data."
    },
    {
      title: "Mobile Application Developer",
      company: "Accenture",
      dates: "Dec 22 - Apr 23",
      description: "Developed and optimized mobile applications, focusing on front-end design, seamless UI/UX improvements, and enhancing app performance for Android and iOS platforms."
    },
    {
      title: "Web Application Developer",
      company: "Accenture",
      dates: "Oct 22 - Dec 22",
      description: "Engineered responsive web applications, enhanced user interfaces, and optimized performance to deliver seamless web experiences, blending functionality with user-centric design."
    }
  ];
}