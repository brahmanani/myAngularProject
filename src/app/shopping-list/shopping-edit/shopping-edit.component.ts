import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode = false;
  editItemIndex:number;
  editedItem:Ingredient;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
   this.subscription =  this.slService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editItemIndex);
  }

}
