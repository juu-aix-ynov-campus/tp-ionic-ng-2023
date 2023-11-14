import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  @Output() onWanted = new EventEmitter<string>()

  onEvent () {
    this.onWanted.emit('Wanted!')
  }

}
