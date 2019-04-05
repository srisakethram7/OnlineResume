import { Component } from '@angular/core';
import { ResumeAPIService } from './resume-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ResumeAPIService]
})
export class AppComponent {
  title = 'Online Resume';
}
