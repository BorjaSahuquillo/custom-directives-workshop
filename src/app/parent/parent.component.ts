import { Component, OnInit } from '@angular/core';
import { BaseDirective } from '../directives/base.directive';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent extends BaseDirective implements OnInit {
  title: string = 'Parent title';

  ngOnInit(): void {}

  testingTitle() {
    console.log('Title: ', this.title);
  }
}
