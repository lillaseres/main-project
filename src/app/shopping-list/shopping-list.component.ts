import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";
import {loggingService} from "../logging.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService, private loggingService: loggingService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInint!');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
