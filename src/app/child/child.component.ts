import {Component, HostListener, Inject, Input, OnInit, Optional} from '@angular/core';
import { Subject } from 'rxjs';
import {ManageChildrenDirective} from '../directives/manage-children.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  clickChanges: Subject<string> = new Subject<string>();


  parentTitle: string = '';

  @Input() title!: string;

  @HostListener('click')
  handleClick() {
    console.log('CLICK en el elemento hijo', this.title);
    this.clickChanges.next(this.title);
  }

  constructor(@Inject(ManageChildrenDirective) @Optional() private manageDirective: ManageChildrenDirective) {}

  ngOnInit(): void {

    this.manageDirective.myChanges.subscribe((response) => {
      this.parentTitle = response;
    })
  }
}
