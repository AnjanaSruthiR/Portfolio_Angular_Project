import { Component, Renderer2, ElementRef, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';

  // Reference to the app wrapper element
  @ViewChild('appWrapper', { static: true }) appWrapper!: ElementRef;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // Inject platform ID to check environment
  ) {}

  ngOnInit(): void {
    // Check if we are in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Set light theme by default on both appWrapper and body
      this.renderer.addClass(this.appWrapper.nativeElement, 'light-theme');
      this.renderer.addClass(document.body, 'light-theme');
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) { // Ensure it's running in the browser
      const isDarkMode = this.appWrapper.nativeElement.classList.contains('dark-theme');

      if (isDarkMode) {
        // Switch to light theme
        this.renderer.removeClass(this.appWrapper.nativeElement, 'dark-theme');
        this.renderer.addClass(this.appWrapper.nativeElement, 'light-theme');
        this.renderer.removeClass(document.body, 'dark-theme');
        this.renderer.addClass(document.body, 'light-theme');
        console.log("Switched to Light Theme");
      } else {
        // Switch to dark theme
        this.renderer.removeClass(this.appWrapper.nativeElement, 'light-theme');
        this.renderer.addClass(this.appWrapper.nativeElement, 'dark-theme');
        this.renderer.removeClass(document.body, 'light-theme');
        this.renderer.addClass(document.body, 'dark-theme');
        console.log("Switched to Dark Theme");
      }
    }
  }
}
