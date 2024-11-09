import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Identity and Access Management (IAM)' },
    { name: 'Mobile App Development' },
    { name: 'Power BI' },
    { name: 'JavaScript' },
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'HTML'},
    { name: 'CSS'}
 
 
    // Add more skills if needed
  ];
}
