import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  repoUrl = 'https://github.com/Hvinder/ShopBridge';

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  shareApp(): void {
    this.snackBar.open('Repo URL copied to clipboard', 'dismiss', {
      duration: 4000,
    });
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea');
      textarea.textContent = this.repoUrl;
      textarea.style.position = 'fixed';  // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
          document.execCommand('copy');  // Security exception may be thrown by some browsers.
      } catch (ex) {
          console.warn('Copy to clipboard failed.', ex);
      } finally {
          document.body.removeChild(textarea);
      }
  }
  }

  openRepo(): void {
    window.open(this.repoUrl);
  }

}
