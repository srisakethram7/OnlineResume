import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recruitermode',
  templateUrl: './recruitermode.component.html',
  styleUrls: ['./recruitermode.component.css']
})
export class RecruitermodeComponent implements OnInit {
  
  loadAbout:boolean = false;
  loadTestimonail:boolean = false;
  constructor(private router: ActivatedRoute, private route: Router) 
  {
    
    router.queryParams.subscribe(param => {
      var testimonail =  param['shareTestimonial'];
      var aboutMe = param['shareAboutMe'];

      if(testimonail == "true")
      {
        this.loadAbout = false;
        this.loadTestimonail = true;    
      }
      else if(aboutMe == "true")
      {
        this.loadAbout = true;
        this.loadTestimonail = false;
      }
      else{
        this.loadAbout = false;
        this.loadTestimonail = false;
      }
    });
      
  }

  ngOnInit() {
    
  }

  getAbout(){
  this.route.navigateByUrl('/recruiter?shareAboutMe=true');
  }

  getTestimonials(){
    this.route.navigateByUrl('recruiter?shareTestimonial=true');
  }

}
