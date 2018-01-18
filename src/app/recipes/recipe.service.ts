import {Injectable} from '@angular/core';

import {Recipe} from '../recipes/recipe.model'
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is Simply Test',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe(
            'A Test Recipe2',
            'This is Simply Test2',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ])
      ];
    
      constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
       this.slService.addIngredients(ingredients);
    }
}