import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import{ Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('Tacos','very tasty','http://static.lakana.com/media.fox32chicago.com/photo/2016/01/29/tacos_istock_1454097032574_780517_ver1.0.jpg',[]),
    new Recipe('lasagna','good','https://barilla.azureedge.net/~/media/images/en_us/hero-images/oven-ready-lasagna.jpg',[])
  ];
 @Output() recipeSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);

}
}
