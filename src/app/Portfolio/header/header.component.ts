import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollDown(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
