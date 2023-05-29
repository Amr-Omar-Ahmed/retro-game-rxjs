import { AfterViewInit, Component } from '@angular/core';
import { PlayerBaseComponent } from '../player-base/player-base.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-player-left',
  templateUrl: './player-left.component.html',
  styleUrls: ['./player-left.component.scss'],
})
export class PlayerLeftComponent extends PlayerBaseComponent {
  private topPositionSubject = new BehaviorSubject<number>(50);
  topPosition$ = this.topPositionSubject.asObservable();

  override events = ['w', 's'];

  override updatePosition(event: any) {
    const currentPosition = this.topPositionSubject.getValue();
    const newPos =
      event.key === 'w' ? currentPosition - 5 : currentPosition + 5;
    if (newPos >= 15 && newPos <= 85) {
      event.key === 'w'
        ? this.topPositionSubject.next(newPos)
        : this.topPositionSubject.next(newPos);
    }
  }
}
