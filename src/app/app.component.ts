import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TeaService } from './data/tea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tea-minder';

  public currentUser: string = 'no user';

  constructor(private authService: TeaService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user: string) => {
      this.currentUser = user;
    });
  }
}

