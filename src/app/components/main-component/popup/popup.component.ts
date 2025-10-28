import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  showPopup = false;
  private popupTimerSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.popupTimerSub = timer(10000).subscribe(() => {
      this.showPopup = true;
    });
  }

  goToCatalog(): void {
    this.showPopup = false;
    this.popupTimerSub?.unsubscribe();
    this.router.navigate(['/catalog']);
  }
}
