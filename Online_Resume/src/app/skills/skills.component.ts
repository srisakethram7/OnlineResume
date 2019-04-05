import { Component, OnInit } from '@angular/core';
import { Skill } from '../class-skill';
import { ResumeAPIService } from '../resume-api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillContent:Skill = new Skill();
  frontEndSkills: Array<string> = new Array<string>();
  backEndSkills: Array<string> = new Array<string>();
  languages: Array<string> = new Array<string>();
  allSkills: Array<string> = new Array<string>();
  isFilteredResult: boolean = false;

  constructor(private apiService: ResumeAPIService) {
    apiService.getSkillsInfo().subscribe(skills => {
      var results: Skill = new Skill();
      this.skillContent.skills = skills;
      this.frontEndSkills = this.skillContent.skills.FrontEnd;
      this.backEndSkills =  this.skillContent.skills.BackEnd;
      this.languages = this.skillContent.skills.Languages;

      this.allSkills = this.frontEndSkills.concat(this.backEndSkills, this.languages);
    });
   }

  ngOnInit() {

    this.isFilteredResult = false;

    // this.skillContent.skills = 
    // [
    //   { key: "frontEnd" , 
    //     value: [
    //       "Angular 2/4", "JQuery", "Angular.js 1.5", "HTML5", "CSS3", "Bootstrap",
    //       "XML"
    //     ] 
    //   },
      
    //   { key: "backEnd" , 
    //     value: [
    //       ".NET Core", "Asp.net", "WPF", "WCF", "WEB API", "LINQ", "Entity Framework"
          
    //     ] 
    //   },

    //   { key: "languages" , 
    //     value: [
    //       "C#", "Java", "C++", "Bash Script", "Type Script", "JavaScript"
          
    //     ] 
    //   },

    // ];
    
  }

  onChange(event):void{
    if(event != "" )
      this.isFilteredResult = true; 
    else
      this.isFilteredResult = false;
  }

}
