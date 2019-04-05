import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Content, AboutContent } from './class-content';
import { Skill } from './class-skill';
import { Testimonial } from './class-testimonial';
import 'rxjs/add/operator/map';

@Injectable()
export class ResumeAPIService {

  m_BaseURL:string = "http://localhost:5000/api/";

  constructor(private http: Http) { }

  getContentInfo(): Observable<Content[]>{
    let url = "http://localhost:5000/api/content";
    let v_Headers = new Headers({ 'Content-Type': 'application/json' });
    let v_ContentInfo = this.http.get(url, { headers: v_Headers }).map(response => response.json());
    return v_ContentInfo;
  }

  getSkillsInfo(): Observable<Skill>{
    let url = "http://localhost:5000/api/skills";
    let v_Headers = new Headers({ 'Content-Type': 'application/json' });
    let v_ContentInfo = this.http.get(url, { headers: v_Headers }).map(response => response.json());
    return v_ContentInfo;
  }

  getAboutMeInfo(): Observable<string[]>{
    let url =  `${this.m_BaseURL}about`;//"http://localhost:5000/api/about";
    let v_Headers = new Headers({ 'Content-Type': 'application/json' });
    let v_ContentInfo = this.http.get(url, { headers: v_Headers }).map(response => response.json());
    return v_ContentInfo;
  }

  UpdateTestimonialInfo(testimonialComment: Testimonial): Observable<boolean> {
    let v_Headers = new Headers({ 'Content-Type': 'application/json' });

    let v_Url = `${this.m_BaseURL}testimonial`;
    let v_Body: Testimonial = testimonialComment;

    let v_Search = this.http.post(v_Url, v_Body, { headers: v_Headers }).map(response => response.json());

    return v_Search;
  }

  GetTestimonialInfo(): Observable<Array<Testimonial>> {
    let url =  `${this.m_BaseURL}testimonial`;//"http://localhost:5000/api/about";
    let v_Headers = new Headers({ 'Content-Type': 'application/json' });
    let v_ContentInfo = this.http.get(url, { headers: v_Headers }).map(response => response.json());
    return v_ContentInfo;
  }


}
