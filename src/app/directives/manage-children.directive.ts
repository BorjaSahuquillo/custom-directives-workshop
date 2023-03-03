import {
  AfterContentInit,
  ContentChildren,
  Directive,
  Host,
  QueryList,
} from '@angular/core';
import {merge, Subject} from 'rxjs';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';

@Directive({
  selector: '[appManageChildren]',
})
export class ManageChildrenDirective implements AfterContentInit {
  @ContentChildren(ChildComponent) private children!: QueryList<ChildComponent>;

  myChanges: Subject<string> = new Subject();

  constructor(@Host() private parentComponent: ParentComponent) {}

  ngAfterContentInit(): void {
    console.log('MANAGE CHILDREN', this.children);

    merge(...this.children.map((child) => child.clickChanges)).subscribe(
      (response) => {
        console.log('child selected: ', response);
        this.parentComponent.title = response;
        this.myChanges.next(response);
      }
    );
  }
}
