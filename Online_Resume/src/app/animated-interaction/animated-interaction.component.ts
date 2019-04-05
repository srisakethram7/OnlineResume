import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-animated-interaction',
  templateUrl: './animated-interaction.component.html',
  styleUrls: ['./animated-interaction.component.css']
})

export class AnimatedInteractionComponent implements OnInit {
  
  text:string = "Let me help you hire me!";
  public url = "assets/images/recruiter.png";

  constructor(private router: Router) { }

  ngOnInit() {
    //this.hideTheButton();
    this.GreetingMessage();
    this.showTheButton();
  }

  hideTheButton():void{
    
    $("#continueButton").hide();
  }

  GreetingMessage():void{
    $('.typingText').typeIt({
      strings: 'Let me help you hire me!',
      speed: 100
      });
  }

  showTheButton():void{
    setTimeout(()=>{ $("#continueButton").show() }, 5000);
    
  }

  onModeClick(value : string){
    $('#myModal').modal('toggle');
    if(value == 'hiringmanager')
      this.router.navigateByUrl('/hiringmanager');
    else
      this.router.navigateByUrl('/recruiter');  
  }
}
