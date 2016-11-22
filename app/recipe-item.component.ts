/**
 * Created by Parthchokshi on 7/16/2016.
 */
import {OnInit, Component, Input, EventEmitter, Output} from "@angular/core";
import {Recipe} from "./recipe";

@Component({
    selector: 'recipe-item',
    templateUrl: 'app/recipe-item.component.html'
})

export class RecipeItemComponent implements OnInit{

    @Input() recipe: Recipe;

    recipeId: number;

    constructor(){}

    ngOnInit(){}

}