import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

// add mouseclick interface here

@Component({
  selector: 'demo',
  template: `
    <button>Click me</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {}
}
