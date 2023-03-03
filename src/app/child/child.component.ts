import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  clickChanges: Subject<string> = new Subject<string>();

  @Input() title!: string;

  @HostListener('click')
  handleClick() {
    console.log('CLICK en el elemento hijo', this.title);
    this.clickChanges.next(this.title);
  }

  constructor() {}

  ngOnInit(): void {}
}
