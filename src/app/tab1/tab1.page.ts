import {Component, OnDestroy, OnInit} from '@angular/core';
import {InputCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
  public size = 'large';
  public label = 'Tab 1';
  public value = 'Tab 1';

  private intervalId?: number;

  ngOnInit(): void {
    console.log('Tab1Page ngOnInit');

  }
  ionViewDidEnter(): void {
    const rand = Math?.random();
    this.intervalId = setInterval(() => {
      this.size = 'small';
      console.log('setInterval '+ rand)
    }, 2000);
    console.log('Tab1Page ionViewDidEnter');
  }

  ionViewDidLeave(): void {
    clearInterval(this.intervalId);
    console.log('Tab1Page ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('Tab1Page ngOnDestroy');
  }

  onInput(event: any) {
    this.value = event.detail.value;
    console.log('onInput', event.detail.value);
  }

  onSubmit() {
    console.log('onSubmit', {value: this.value, size: this.size});
  }
}
