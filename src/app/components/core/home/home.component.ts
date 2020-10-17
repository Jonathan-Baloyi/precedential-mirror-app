import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { IMenu } from 'src/app/models/IMenu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  menuItems: IMenu[] = [];
  public imagesUrl;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.imagesUrl = ['assets/food1.png', 'assets/food1.png', 'assets/food1.png'];

    this.menuService.getMenu().subscribe(val => {
      this.menuItems = val;
    });
  }

}
