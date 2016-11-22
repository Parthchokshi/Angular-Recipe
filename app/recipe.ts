import {Ingredient} from "./Ingredient";
/**
 * Created by Parthchokshi on 7/16/2016.
 */

export class Recipe{
    constructor(public name:string, public description:string, public imagePath:string, public ingredients: Ingredient[]){}

}
