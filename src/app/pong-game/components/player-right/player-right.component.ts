import { Component } from '@angular/core';
import { PlayerBaseComponent } from '../player-base/player-base.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-player-right',
  templateUrl: './player-right.component.html',
  styleUrls: ['./player-right.component.scss'],
})
export class PlayerRightComponent extends PlayerBaseComponent {
  private topPositionSubject = new BehaviorSubject<number>(50);
  topPosition$ = this.topPositionSubject.asObservable();

  override events = ['ArrowUp', 'ArrowDown'];

  override updatePosition(event: any) {
    const currentPosition = this.topPositionSubject.getValue();
    const newPos =
      event.key === 'ArrowUp' ? currentPosition - 5 : currentPosition + 5;
    if (newPos >= 15 && newPos <= 85) {
      event.key === 'ArrowUp'
        ? this.topPositionSubject.next(newPos)
        : this.topPositionSubject.next(newPos);
    }
  }
}
