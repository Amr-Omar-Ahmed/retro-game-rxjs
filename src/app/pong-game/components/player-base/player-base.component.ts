import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
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
export class PlayerBaseComponent implements AfterViewInit, OnDestroy {
  events: Array<string>;
  playerMove$: Observable<any>;
  subscription: Subscription;

  constructor(protected pongGameService: PongGameService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.subscription = combineLatest([
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
