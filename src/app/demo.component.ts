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
      next(event: string) {
        console.log(event);
      },
      error() {
        // dont care
      },
      complete() {
        console.log(`observable completed`);
      },
    };
    // this.subscription = fromEvent(this.button.nativeElement, 'click').subscribe((x) =>
    //   console.log('clicked')
    // );

    const completedObservable = new Observable(function (obs) {
      obs.next();
    });
    completedObservable.subscribe(observer);
    const arrowFunctionObservable = new Observable((obs) => {
      obs.next('now with an arrow function');
    });
    arrowFunctionObservable.subscribe(observer)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
