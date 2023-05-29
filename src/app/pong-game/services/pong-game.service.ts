import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PongGameService {
  private isGameStartedSubject = new BehaviorSubject<boolean>(false);
  isGameStarted$ = this.isGameStartedSubject.asObservable();

  // private isGameResettedSubject$ = new BehaviorSubject<boolean>(false);
  // isGameResetted$ = this.isGameResettedSubject$.asObservable();

  private isGamePuasedSubject = new BehaviorSubject<boolean>(false);
  isGamePuased$ = this.isGamePuasedSubject.asObservable();

  private leftPlayerScoreSubject = new BehaviorSubject<number>(0);
  leftPlayerScore$ = this.leftPlayerScoreSubject.asObservable();

  private rightPlayerScoreSubject = new BehaviorSubject<number>(0);
  rightPlayerScore$ = this.rightPlayerScoreSubject.asObservable();

  startGame() {
    this.isGameStartedSubject.next(true);
  }

  pauseGame() {
    this.isGamePuasedSubject.next(!this.isGamePuasedSubject.getValue());
  }

  updatePlayerScore(player: string) {
    if (player === 'left') {
      this.leftPlayerScoreSubject.next(
        this.leftPlayerScoreSubject.getValue() + 1
      );
    } else {
      this.rightPlayerScoreSubject.next(
        this.rightPlayerScoreSubject.getValue() + 1
      );
    }
  }
}
