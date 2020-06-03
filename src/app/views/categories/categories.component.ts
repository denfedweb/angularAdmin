import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../Model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(private dataHandler: DataHandlerService) {

  }

  //метод вызывается после инициализации компонента
  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
    console.table(this.categories);
    console.trace();
  }

}
