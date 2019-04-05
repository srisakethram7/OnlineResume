import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HiringmanagermodeComponent } from './hiringmanagermode/hiringmanagermode.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { AnimatedInteractionComponent } from './animated-interaction/animated-interaction.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';
import { RecruitermodeComponent } from './recruitermode/recruitermode.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HiringmanagermodeComponent,
    LeftsidebarComponent,
    AnimatedInteractionComponent,
    SkillsComponent,
    FilterPipe,
    RecruitermodeComponent,
    AboutPageComponent,
    TestimonialsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' }, 
      { path: 'hiringmanager', component: HiringmanagermodeComponent},
      { path: 'home', component: AnimatedInteractionComponent},
      { path: 'recruiter', component: RecruitermodeComponent}
    
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
