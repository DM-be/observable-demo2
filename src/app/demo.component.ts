import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'demo',
  template: `
    <h1>just a demo</h1>
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
  private subscription: Subscription;
  ngOnInit(): void {
    const aSumObserver = {
      sum: 0,
      next(value) {
        console.log(`adding ${value}`);
        this.sum = this.sum + value;
      },
      error() {
        // dont care
      },
      complete() {
        console.log(`observable completed: the sum is ${this.sum}`);
      },
    };
    this.subscription = of(1, 3, 4).subscribe(aSumObserver);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
