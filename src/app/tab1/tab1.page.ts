import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {


  public size = 'large';
  public label = 'Tab 1';
  public value = 'Tab 1';

  constructor() {}
  ngOnInit(): void {
    console.log('Tab1Page ngOnInit');

    setTimeout(() => {
      this.size = 'small';
    }, 2000);
  }

  ngOnDestroy(): void {

    console.log('Tab1Page ngOnDestroy');
  }

  onInput(event: any) {
    this.value = event.detail.value;
    console.log('onInput', event.detail.value);
  }
}
