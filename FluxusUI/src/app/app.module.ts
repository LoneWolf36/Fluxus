import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './modules/subComponents/overview/overview.component';
import { ExperienceComponent } from './modules/subComponents/experience/experience.component';
import { SkillsComponent } from './modules/subComponents/skills/skills.component';
import { ProjectsComponent } from './modules/subComponents/projects/projects.component';
import { AchievementsComponent } from './modules/subComponents/achievements/achievements.component';
import { InterestsComponent } from './modules/subComponents/interests/interests.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'achievements', component: AchievementsComponent },
      { path: 'interests', component: InterestsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OverviewComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    AchievementsComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
