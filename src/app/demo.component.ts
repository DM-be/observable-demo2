import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'demo',
  template: `
  <button #btn >Click me</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class DemoComponent implements OnInit, OnDestroy {
  @ViewChild('btn') button: ElementRef;

  private subscription: Subscription;
  ngOnInit(): void {
    const observer = {
      next(event: any) {
        console.log(event);
      },
      error() {
      },
      complete() {
        console.log(`observable completed`);
      },
    };


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
