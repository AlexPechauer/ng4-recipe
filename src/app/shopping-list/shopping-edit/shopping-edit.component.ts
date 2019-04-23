import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild allows the ts to listen to the DOM and capture that data as nameInputRef.
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // Creates a new EventEmitter for the Ingredient object type.
  // Allows for the data to go up to the parent component and be heard.
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    // the data is extracted from nameInputRef via .nativeElement.value
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    // a new object of type Ingredient is created.
    const newIngredient = new Ingredient(ingName, ingAmount);

    // this new object is emitted up to the parent component.
    this.ingredientAdded.emit(newIngredient);

  }

}
