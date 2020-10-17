import { Component, OnInit } from '@angular/core';
import { IMenu } from './models/IMenu';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'precedential-mirror-app';
  menuItems: IMenu[] = [];
  constructor(private menuService: MenuService) { }


  ngOnInit() {
    this.menuService.getMenu().subscribe(val => {
      this.menuItems = val;
    });
  }

}
