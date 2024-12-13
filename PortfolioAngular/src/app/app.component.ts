import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, NavigationExtras } from '@angular/router';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Start state for new and leaving routes
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        group([
          // Slide in the new page from the right
          query(':enter', [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('700ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
              style({ transform: 'translateX(0%)', opacity: 1 }))
          ], { optional: true }),
          // Slide out the old page to the left
          query(':leave', [
            animate('500ms cubic-bezier(0.25, 0.8, 0.25, 1)', 
              style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  theme = 'light';

  // Change the visibility of `router` to public
  constructor(public router: Router, private renderer: Renderer2) {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.setTheme(savedTheme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(this.theme);
  }

  setTheme(theme: string) {
    this.renderer.setAttribute(document.body, 'data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  scrollToContact() {
    // Navigate to About page and scroll after a delay
    this.router.navigate(['/contactForm']).then(() => {
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 1000); // 500ms delay to ensure the page has loaded
    });
  }

  // private scrollToContactSection() {
  //   const contactSection = document.querySelector('.contact-container');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
