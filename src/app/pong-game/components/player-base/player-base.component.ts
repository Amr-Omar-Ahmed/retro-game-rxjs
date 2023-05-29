import { AfterViewInit, Component } from '@angular/core';
import {
  Observable,
  combineLatest,
  filter,
  fromEvent,
  switchMap,
  takeUntil,
} from 'rxjs';
import { PongGameService } from '../../services/pong-game.service';
@Component({
  selector: 'app-player-base',
  template: '',
  styleUrls: ['./player-base.component.scss'],
})
export class PlayerBaseComponent implements AfterViewInit {
  events: Array<string>;
  playerMove$: Observable<any>;

  constructor(protected pongGameService: PongGameService) {}

  ngAfterViewInit(): void {
    combineLatest([
      this.pongGameService.isGameStarted$,
      this.pongGameService.isGamePuased$,
    ])
      .pipe(
        filter(
          ([isGameStarted, isGamePaused]) => isGameStarted && !isGamePaused
        ),
        switchMap(() => {
          return fromEvent(document, 'keydown').pipe(
            filter((event: any) => this.events.includes(event.key)),
            takeUntil(
              this.pongGameService.isGamePuased$.pipe(
                filter((isGamePaused) => isGamePaused)
              )
            )
          );
        })
      )
      .subscribe((event: any) => {
        this.updatePosition(event);
      });
  }

  updatePosition(event: any) {
    throw new Error('Method should be overridden in implementing class');
  }
}
