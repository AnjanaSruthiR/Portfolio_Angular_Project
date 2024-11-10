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
      institution: "Northeastern University, Boston, MA",
      year: "Sep 24 - May 26",
      description: "Focused on data management, system design, and emerging technologies."
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Sri Venkateswara Engineering College for Women, India",
      year: "2018 - 2022",
      description: "Specialized in software development, machine learning, and cloud computing."
    }
  ];
}
