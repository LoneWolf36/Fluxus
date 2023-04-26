import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSmallScreen: boolean;
  navigationLinks = [{ value: 'overview', viewValue: 'Overview' }, { value: 'experience', viewValue: 'Experience' }, { value: 'skills', viewValue: 'Skills' }, { value: 'projects', viewValue: 'Projects' }, { value: 'achievements', viewValue: 'Achievements' }, { value: 'interests', viewValue: 'Interests' }];
  defaultSection: string = "overview";

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.isSmallScreen = false;
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe((result: { matches: boolean; }) => {
      this.isSmallScreen = result.matches;
    });
    this.onNavClick(this.defaultSection);
  }

  onNavClick(value: any) {
    this.router.navigate(['/home/' + value]);
  }

}