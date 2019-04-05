import { Component, OnInit } from '@angular/core';
import { ResumeAPIService } from '../resume-api.service';
import { AboutContent } from '../class-content';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  aboutMeDesc: string = "";

  constructor(private apiService: ResumeAPIService) 
  { 
    this.apiService.getAboutMeInfo().subscribe(info => {
      this.aboutMeDesc= info[0];
    });
  }

  ngOnInit() {
    
  }

}
