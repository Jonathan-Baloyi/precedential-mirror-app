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
    this.imagesUrl = [
      'assets/maize-meal2.jpg',
      'assets/chicken.jpg',
      'assets/eggs.jpg',
      'assets/goats.jpg',
      'assets/tomatoes.jpg',
      'assets/spinach.jpg'
    ];

    this.menuService.getMenu().subscribe(val => {
      this.menuItems = val;
    });
  }

}
