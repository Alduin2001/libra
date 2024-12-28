import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDropOpenMain = false;
  isDropOpenAuth = false;
  isDropOpenCabinet = false;
  toggleDropMain(){
    this.isDropOpenMain = !this.isDropOpenMain;
  }
  toggleDropAuth(){
    this.isDropOpenAuth = !this.isDropOpenAuth;
  }
  toggleDropCabinet(){
    this.isDropOpenCabinet = !this.isDropOpenCabinet;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-button')) {
      this.isDropOpenMain = false;
      this.isDropOpenAuth = false;
      this.isDropOpenCabinet = false;
    }
  }
}
