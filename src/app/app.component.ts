import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FypComponent } from "./fyp/fyp.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from "./footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FypComponent, SidebarComponent, NavComponent, FooterComponent]
})
export class AppComponent {
  title = 'frontProj';
}
