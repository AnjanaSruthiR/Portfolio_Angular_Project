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
      description: "Spearheaded the enhancement of Identity and Access Management (IAM) systems by deploying Okta SSO and MFA, fortifying security protocols and streamlining user authentication. Proactively eliminated vulnerabilities, reducing support incidents by 30% while ensuring compliance with industry standards."
    },
    {
      title: "Application Developer",
      company: "Accenture",
      dates: "May 23 - Jul 24",
      description: "Developed and launched dynamic, cross-platform applications for mobile, desktop, and tablets using HTML, CSS, and jQuery. Delivered responsive, scalable solutions ahead of deadlines, significantly improving user engagement and operational efficiency."
    },
    {
      title: "Mobile Application Developer",
      company: "Accenture",
      dates: "Dec 22 - Apr 23",
      description: "Engineered high-performing Android and iOS applications, leveraging Kotlin and Swift to deliver seamless UI/UX and enhance functionality. Optimized performance and resolved complex bugs, resulting in increased app reliability and customer satisfaction."
    },
    {
      title: "Web Application Developer",
      company: "Accenture",
      dates: "Oct 22 - Dec 22",
      description: "Designed and deployed responsive, high-performance web applications using HTML, CSS, and JavaScript frameworks. Revolutionized user interfaces and optimized front-end functionality, driving a 25% increase in user engagement."
    }
  ];
}