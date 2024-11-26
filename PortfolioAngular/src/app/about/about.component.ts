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
      date: 'Sep 2024 - Dec 2026',
      description: 'Currently pursuing my Master\'s degree at Northeastern University, honing my expertise in Information Systems by blending academic rigor with hands-on projects to develop innovative solutions and prepare for real-world challenges.',
      isLeft: true
    },
    {
      type: 'experience',
      title: 'Security Engineer at Accenture',
      date: 'May 2023 - Jul 2024',
      description: 'I bridged innovation and security, crafting IAM solutions that safeguarded applications while delivering a seamless, user-centric experience.',
      isLeft: false
    },
    {
      type: 'experience',
      title: 'Application Developer at Accenture',
      date: 'Oct 2022 - May 2023',
      description: 'As an Application Developer, I brought ideas to life by designing and delivering intuitive, high-performing applications, seamlessly blending functionality and user experience to exceed expectations.',
      isLeft: true
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science Engineering',
      date: 'Jul 2018 - Jul 2022',
      description: 'Completed my Bachelor\'s degree in Computer Science and Engineering, building a strong foundation in programming, algorithms, and system design while working on diverse projects that fostered innovation and problem-solving skills.',
      isLeft: false
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
