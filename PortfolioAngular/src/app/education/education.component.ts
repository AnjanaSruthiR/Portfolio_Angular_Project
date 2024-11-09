import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList = [
    {
      degree: "Master of Science in Information Systems",
      institution: "Northeastern University",
      year: "2023 - Present",
      description: "Focused on data management, system design, and emerging technologies."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University of XYZ",
      year: "2018 - 2022",
      description: "Specialized in software development, machine learning, and cloud computing."
    }
  ];
}
