import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe";
import {Ingredient} from "./Ingredient";
/**
 * Created by Parthchokshi on 7/22/2016.
 */

@Injectable()
export class RecipesService{

    selectedRecipe= new EventEmitter();
    private recipes: Recipe[] = [
      new Recipe('Panner Tikka Masala', 'One of the most common punjabi dishes', 'https://myfancypantry.files.wordpress.com/2013/01/paneer-tikka-masala.jpg',
        [
          new Ingredient('French Fries', 100),
          new Ingredient('Bhaji', 300)
        ]),
      new Recipe('Paneer Bhurji', 'Crushed Indian Cheese instead of whole', 'https://i.ytimg.com/vi/P40nL8CKR9g/maxresdefault.jpg', [])
    ];

    constructor(){}

    getRecipes(){
      return this.recipes;
    }

    sendRecipeDetail(recipe: Recipe){
      this.selectedRecipe.emit(recipe);
    }
}
