import { Component, OnInit } from '@angular/core';
import { Content, HeadingType } from '../class-content';
import { ResumeAPIService } from '../resume-api.service';

declare var $:any;
@Component({
  selector: 'app-hiringmanagermode',
  templateUrl: './hiringmanagermode.component.html',
  styleUrls: ['./hiringmanagermode.component.css']
})
export class HiringmanagermodeComponent implements OnInit {

  displayData: Array<Content> = new Array<Content>();
  heading:string = "";
  description:string = "";
  isFirstSection:boolean=true;
  isLastSection:boolean=true;
  isWorkFirstSection:boolean=true;
  isWorkLastSection:boolean=true;
  subHeading:string = "";
  location:string = "";
  workTitle:string = "";
  duration:string = "";
  countExperience: number = 1;
  workExperienceList: Array<Content> = new Array<Content>();

  constructor(private apiService: ResumeAPIService) { 
    apiService.getContentInfo().subscribe(data =>{
      this.displayData = data;
      this.heading = 'Summary';
      this.description = this.displayData[0].description;
      this.isFirstSection = true;
      this.isLastSection = false;

      this.isWorkFirstSection = true;
      this.isWorkLastSection = false;

      for(var i =0; i<5; i++){
        this.workExperienceList[i] = this.displayData[i+1];
      }
    });

    
    
  }

  ngOnInit() {
    
  }

  setActiveDescription(val:string):void{
    this.description = val;
  }

  setHeading(val:HeadingType):void{
    this.heading = val;
  }

  getNextSection():void{

    if(this.heading == HeadingType.SUMMARY){
      this.setHeading(HeadingType.WORKEXPERIENCE);
      this.subHeading = this.displayData[1].subHeading;
      this.location = this.displayData[1].location;
      this.workTitle = this.displayData[1].workTitle;
      this.duration = this.displayData[1].duration;
      this.setActiveDescription(this.displayData[1].description);
      this.isFirstSection = false;
      this.isLastSection = false;
    }

    else if(this.heading == HeadingType.WORKEXPERIENCE){
      this.setHeading(HeadingType.EDUCATION);
      this.setActiveDescription(this.displayData[6].description);
      this.isFirstSection = false;
      this.isLastSection = true;
    }

    this.countExperience = 1;
  }

  getPrevSection():void{

    if(this.heading == HeadingType.WORKEXPERIENCE){
      this.setHeading(HeadingType.SUMMARY);
      this.setActiveDescription(this.displayData[0].description);
      this.isFirstSection = true;
      this.isLastSection = false;
    }

    else if(this.heading == HeadingType.EDUCATION){
      this.setHeading(HeadingType.WORKEXPERIENCE);
      this.subHeading = this.displayData[1].subHeading;
      this.location = this.displayData[1].location;
      this.workTitle = this.displayData[1].workTitle;
      this.duration = this.displayData[1].duration;
      this.setActiveDescription(this.displayData[1].description);
      this.isFirstSection = false;
      this.isLastSection = false;
    }

    this.countExperience = 1;
  }

  getNextWorkExperience():void{
    if(this.heading == HeadingType.WORKEXPERIENCE){
      this.countExperience++;

      
      this.setHeading(HeadingType.WORKEXPERIENCE);
      this.subHeading = this.displayData[this.countExperience].subHeading;
      this.location = this.displayData[this.countExperience].location;
      this.workTitle = this.displayData[this.countExperience].workTitle;
      this.duration = this.displayData[this.countExperience].duration;
      this.setActiveDescription(this.displayData[this.countExperience].description);

      if(this.countExperience != 4){
        this.isWorkFirstSection = false;
        this.isWorkLastSection = false;
      }
      else{
        this.isWorkFirstSection = false;
        this.isWorkLastSection = true;
        this.countExperience = 3;
      }
      
    }
  }

  getPrevWorkExperience():void{
    if(this.heading == HeadingType.WORKEXPERIENCE){
      this.countExperience--;

      this.setHeading(HeadingType.WORKEXPERIENCE);
      this.subHeading = this.displayData[this.countExperience].subHeading;
      this.location = this.displayData[this.countExperience].location;
      this.workTitle = this.displayData[this.countExperience].workTitle;
      this.duration = this.displayData[this.countExperience].duration;
      this.setActiveDescription(this.displayData[this.countExperience].description);
      this.isWorkFirstSection = false;
      this.isWorkLastSection = false;

      if(this.countExperience != 1){
        this.isWorkFirstSection = false;
        this.isWorkLastSection = false;
      }
      else{
        this.isWorkFirstSection = true;
        this.isWorkLastSection = false;
      }
    }
  }

  getOffSetWidth():string{

  var str= "";
  var ele = document.getElementById("locationId");
  str = ele.offsetWidth + "px";


  return str;
  }

  getClassList():string {
    if(this.heading == "Work Experience"){
      return "col-sm-10 text-left";
    }
    else{
      return "col-sm-6 text-left";
    }
  }

  getLeftBarClassList():string{
    if(this.heading == "Work Experience"){
      return "col-sm-2 sidenav";
    }
    else{
      return "col-sm-2 sidenav";
    }
  }
}
