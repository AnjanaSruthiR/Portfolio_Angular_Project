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
      cgpa: "3.8/4.0",
      description: [
        "Foundations of Data Analytics",
        "Data Management for Analytics", 
        "Computation and Visualization"
      ]
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Sri Venkateswara Engineering College for Women, India",
      cgpa: "3.0/4.0",
      description: [
        "Discrete Mathematics",
        "Principles of Programming Languages",
        "Database Management Systems",
        "Object Oriented Programming",
        "AI & ML",
        "Cloud computing"
      ]
    }
  ];
}
