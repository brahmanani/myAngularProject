import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameElementRef:ElementRef;
  @ViewChild('amountInput') amountElementRef:ElementRef;


  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const nameRef = this.nameElementRef.nativeElement.value;
    const amountRef = this.amountElementRef.nativeElement.value;
    const newIngredient = new Ingredient(nameRef,amountRef);
    this.slService.addIngredient(newIngredient);
    console.log(newIngredient)
  }

}
