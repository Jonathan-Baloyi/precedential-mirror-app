import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { IMenu } from 'src/app/models/IMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  @Input()
  public menuItems: IMenu[];

  navbarOpen = false;
  outsideClick = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {

      if (this.navbarOpen) {
        this.navbarOpen = false;
      }

      this.outsideClick = false;

    } else {
      this.outsideClick = true;
    }
  }

  ToggleNavBar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
