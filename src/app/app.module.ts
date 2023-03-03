import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ParentModifyDirective } from './directives/parent-modify.directive';
import { CardComponent } from './card/card.component';
import { CardBodyDirective } from './directives/card-body.directive';
import { CardActionsDirective } from './directives/card-actions.directive';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyButton2Component } from './my-button2/my-button2.component';
import { CardParentHandlerDirective } from './directives/card-parent-handler.directive';
import { BaseDirective } from './directives/base.directive';
import { ChildComponent } from './child/child.component';
import { ManageChildrenDirective } from './directives/manage-children.directive';

@NgModule({
  declarations: [AppComponent, ParentComponent, ParentModifyDirective, CardComponent, CardBodyDirective, CardActionsDirective, MyButtonComponent, MyButton2Component, CardParentHandlerDirective, BaseDirective, ChildComponent, ManageChildrenDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
