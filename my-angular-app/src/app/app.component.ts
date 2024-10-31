import { Component, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
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

  // Reference to the app wrapper and header elements
  @ViewChild('appWrapper', { static: true }) appWrapper!: ElementRef;
  @ViewChild('appHeader', { static: true }) appHeader!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Set light theme by default
    this.renderer.addClass(this.appWrapper.nativeElement, 'light-theme');
  }

  toggleTheme() {
    const isDarkMode = this.appWrapper.nativeElement.classList.contains('dark-theme');

    if (isDarkMode) {
      this.renderer.removeClass(this.appWrapper.nativeElement, 'dark-theme');
      this.renderer.addClass(this.appWrapper.nativeElement, 'light-theme');
      console.log("Switched to Light Theme");
    } else {
      this.renderer.removeClass(this.appWrapper.nativeElement, 'light-theme');
      this.renderer.addClass(this.appWrapper.nativeElement, 'dark-theme');
      console.log("Switched to Dark Theme");
    }
  }
}