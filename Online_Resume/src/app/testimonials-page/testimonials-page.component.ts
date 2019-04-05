import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../class-testimonial';
import { ResumeAPIService } from '../resume-api.service';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.css']
})
export class TestimonialsPageComponent implements OnInit {

  companies: Array<string> = new Array<string>();
  relations: Array<string> = new Array<string>();
  editMode: boolean = false;
  testimonialComment: Testimonial  = new Testimonial();
  testimonialsList: Array<Testimonial> = new Array<Testimonial>();

  constructor(private resumeApi: ResumeAPIService) 
  { 
    this.companies.push("Eaglepoint Software, Inc");
    this.companies.push("SEI Archway");
    this.companies.push("National Government Service");
    this.companies.push("Indiana State University");
    this.companies.push("Cognizant Technology Services");

    this.testimonialComment.companies = this.companies;

    this.relations.push("Hiring Manager/Team Lead");
    this.relations.push("Co-worker");
    this.relations.push("HR/Recruiter");
    
    this.testimonialComment.relations = this.relations;

    var testimonial1:Testimonial = new Testimonial();
    testimonial1.name = "Chri Ryan";
    testimonial1.company = "Eaglepoint Software, Inc";
    testimonial1.relation = "Hiring Manager/Team Lead";
    testimonial1.comment = "Ram is excellent with problem solving skills. Ram learns new technolgies pretty damn good." +
                            "he is a good hire and has excellent communication skills";
    
    var testimonial2:Testimonial = new Testimonial();
    testimonial2.name = "Bhuvan Goradia";
    testimonial2.company = "SEI Archway";
    testimonial2.relation = "Hiring Manager/Team Lead";
    testimonial2.comment = "Ram is excellent with problem solving skills. Ram learns new technolgies pretty damn good." +
                            "he is a good hire and has excellent communication skills";

    var testimonial3:Testimonial = new Testimonial();
    testimonial3.name = "Kerolos Sarofem";
    testimonial3.company = "National Government Service";
    testimonial3.relation = "Co-worker";
    testimonial3.comment = "Ram is excellent with problem solving skills. Ram learns new technolgies pretty damn good." +
                            "he is a good hire and has excellent communication skills." + 
                            " He meets the deadlines consistently. He is felxible and easy to work with." +
                            " Good troubleshooting skills";

    this.testimonialsList.push(testimonial1);
    this.testimonialsList.push(testimonial2);
    this.testimonialsList.push(testimonial3);
  }

  ngOnInit() {
    this.resumeApi.GetTestimonialInfo().subscribe(res2 => {
      this.testimonialsList = res2;
    });
  }

  writeTestimonial(){
    this.editMode = true;
  }

  cancelTestimonial(){
    this.editMode = false;
  }

  onSubmit(){
    console.log(this.testimonialComment.name + " " + this.testimonialComment.company);
    console.log(this.testimonialComment.relation + " " + this.testimonialComment.comment);
    var name: string = this.testimonialComment.name;
    var company: string = this.testimonialComment.company;
    var relation: string = this.testimonialComment.relation;
    var comment: string = this.testimonialComment.comment;

    if(name == "" || company == "" || relation == "" || comment == ""){
      return;
    }
    
    this.testimonialComment.name = name;
    this.testimonialComment.company = company;
    this.testimonialComment.relation = relation;
    this.testimonialComment.comment = comment;

    this.resumeApi.UpdateTestimonialInfo(this.testimonialComment).subscribe(res => {
      this.editMode = false;

      
    });
  }
}
