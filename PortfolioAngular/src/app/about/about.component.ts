import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.6s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class AboutComponent {
  contactForm: FormGroup;
  successMessage: string = '';

  timelineItems = [
    {
      type: 'education',
      title: 'Master of Science in Information Systems',
      date: '2023 - Present',
      description: 'Currently pursuing my Master\'s degree at Northeastern University.',
      isLeft: true
    },
    {
      type: 'experience',
      title: 'Application Developer at Accenture',
      date: '2020 - 2023',
      description: 'Specialized in IAM, SSO, and mobile development for security solutions.',
      isLeft: false
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      date: '2016 - 2020',
      description: 'Graduated with honors, focusing on software engineering and data analysis.',
      isLeft: true
    }
    // Add more items if necessary
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.successMessage = "Thank you! Your message has been sent.";
      console.log('Form Submitted', this.contactForm.value);
      this.contactForm.reset();
    }
  }

  navigateToSection(section: string) {
    if (section === 'education') {
      this.router.navigate(['/education']);
    } else if (section === 'experience') {
      this.router.navigate(['/experience']);
    }
  }
}
