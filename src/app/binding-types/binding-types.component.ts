import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-types',
  templateUrl: './binding-types.component.html',
  styleUrls: ['./binding-types.component.css']
})
export class BindingTypesComponent implements OnInit {
  binding1: string = 'String Interpolation';
  binding2: string = 'Property Binding';
  element: HTMLElement | undefined;

  constructor() { }

  hover() {
    this.element = document.getElementById('binding3') as HTMLElement;
    this.element.innerText = 'Event Binding';
  }

  leave() {
    this.element = document.getElementById('binding3') as HTMLElement;
    this.element.innerText = 'binding3';
  }

  ngOnInit(): void {
  }

}
