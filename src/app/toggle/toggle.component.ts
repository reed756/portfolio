import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  // Query for the toggle that is used to change between themes
  toggle = document.querySelector('#themeToggle');

  constructor() { }

  ngOnInit() {
    // Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addListener((e) => this.checkToggle(e.matches));
  }

  // Listen for the toggle check/uncheck to toggle the dark class on the <body>
  toggleDarkMode(ev) {
    document.body.classList.toggle('dark', ev.detail.checked);
  }

  // Called when the app loads
  loadApp() {
    this.checkToggle(this.prefersDark.matches);
  }

  // Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck) {
    this.toggle.ariaChecked = shouldCheck;
  }

  showLabel() {
    let screenWidth = window.screen.width;
    console.log(screenWidth);
    if (screenWidth < 380) {
      return false;
    } else {
      return true;
    }
  }

}
