import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = 'light';

  constructor(private renderer: Renderer2, private router: Router) {
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
    // Check if already on the root (home) page
    if (this.router.url === '/') {
      // Directly scroll to the contact section if on home page
      this.scrollToContactSection();
    } else {
      // Navigate to home page, then scroll to the contact section
      this.router.navigate(['/']).then(() => {
        this.scrollToContactSection();
      });
    }
  }

  private scrollToContactSection() {
    const contactSection = document.querySelector('.contact-container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
