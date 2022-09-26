import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {SharedModule} from "../shared/shared.module";
import {loggingService} from "../logging.service";



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent},
    ]),
    SharedModule
  ],
  // providers: [loggingService]
})
export class ShoppingListModule {
}
