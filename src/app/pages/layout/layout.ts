import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet, MatIcon],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {
  isDrawerOpen = true;
  onDrawerChange(status: boolean) {
  this.isDrawerOpen = status;
}
}
