import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PongGameService } from '../../services/pong-game.service';
import { PONG_GAME_CONFIG } from '../../game.config';
import { convertVhToPx, randomNumber } from 'src/app/utilities';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements AfterViewInit {
  @ViewChild('ball', { static: true }) ballRef: any;
  private ballPostionSubject = new BehaviorSubject<{ x: number; y: number }>({
    x: 50,
    y: 50,
  });
  ballPosition$ = this.ballPostionSubject.asObservable();
  direction: { x: number; y: number };

  lastTime: number;
  VELOCITY_INCREASE = PONG_GAME_CONFIG.VELOCITY_INCREASE;
  INITIAL_VELOCITY = PONG_GAME_CONFIG.INITIAL_VELOCITY;
  MAX_VELOCITY = PONG_GAME_CONFIG.MAX_VELOCITY;
  velocity = PONG_GAME_CONFIG.INITIAL_VELOCITY;

  isGamePaused = false;

  constructor(public pongGameService: PongGameService) {}

  ngAfterViewInit(): void {
    this.pongGameService.isGameStarted$.subscribe((isGameStarted: Boolean) => {
      if (isGameStarted) {
        this.intializeBallConfig();
        requestAnimationFrame(this.listenToBallMovementChanges.bind(this));
      }
    });

    this.pongGameService.isGamePuased$.subscribe((isGamePaused) => {
      this.isGamePaused = isGamePaused;
    });
  }

  setRandomBallHeading() {
    const heading = randomNumber(0, 2 * Math.PI);
    this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
  }

  listenToBallMovementChanges(time: number) {
    if (this.lastTime) {
      this.updateBallPosition(time - this.lastTime);
    }

    this.lastTime = time;
    requestAnimationFrame(this.listenToBallMovementChanges.bind(this));
  }

  updateBallPosition(timeDiff: number) {
    if (this.isGamePaused) {
      return;
    }

    if (this.isAnyPlayerLost()) {
      this.updateWinnerScore();
      this.intializeBallConfig();
      return;
    }

    if (this.isBallCollidingWithUpOrBottomWalls()) {
      this.direction.y *= -1;
    }

    if (
      this.checkCollisionWithPlayer(this.getPlayerLeftDomRect()) ||
      this.checkCollisionWithPlayer(this.getPlayerRightDomRect())
    ) {
      this.direction.x *= -1;
    }

    const currentPosition = this.ballPostionSubject.getValue();
    if (this.velocity < this.MAX_VELOCITY) {
      this.velocity += this.VELOCITY_INCREASE * timeDiff;
    }
    currentPosition.x += this.direction.x * this.velocity * timeDiff;
    currentPosition.y += this.direction.y * this.velocity * timeDiff;

    this.ballPostionSubject.next(currentPosition);
  }

  isBallCollidingWithUpOrBottomWalls(): boolean {
    return (
      this.getBallDomRect().bottom >= convertVhToPx(90) ||
      this.getBallDomRect().top <= convertVhToPx(10)
    );
  }

  getBallDomRect(): DOMRect {
    return this.ballRef.nativeElement.getBoundingClientRect();
  }

  getPlayerLeftDomRect(): DOMRect {
    return (
      document.getElementById('player-left')?.getBoundingClientRect() ??
      new DOMRect(0, 0, 0, 0)
    );
  }

  getPlayerRightDomRect(): DOMRect {
    return (
      document.getElementById('player-right')?.getBoundingClientRect() ??
      new DOMRect(0, 0, 0, 0)
    );
  }

  checkCollision() {
    const ballRect = this.getBallDomRect();
    const playerLeftRect = this.getPlayerLeftDomRect();
    const playerRightRect = this.getPlayerRightDomRect();
    return (
      this.isBallCollidingWithPlayer(playerLeftRect, ballRect) ||
      this.isBallCollidingWithPlayer(playerRightRect, ballRect)
    );
  }

  checkCollisionWithPlayer(playerRect: DOMRect) {
    const ballRect = this.getBallDomRect();
    return this.isBallCollidingWithPlayer(playerRect, ballRect);
  }

  isBallCollidingWithPlayer(playerRect: DOMRect, ballRect: DOMRect) {
    return (
      playerRect.left <= ballRect.right &&
      playerRect.right >= ballRect.left &&
      playerRect.top <= ballRect.bottom &&
      playerRect.bottom >= ballRect.top
    );
  }

  isAnyPlayerLost(): boolean {
    return this.isLeftPLayerLose() || this.isRightPlayerLose();
  }

  intializeBallConfig() {
    this.setRandomBallHeading();
    this.velocity = this.INITIAL_VELOCITY;
    this.ballPostionSubject.next({ x: 50, y: 50 });
  }

  updateWinnerScore() {
    if (this.isLeftPLayerLose()) {
      this.pongGameService.updatePlayerScore('right');
    } else if (this.isRightPlayerLose()) {
      this.pongGameService.updatePlayerScore('left');
    }
  }

  isLeftPLayerLose(): boolean {
    return this.getBallDomRect().left <= 0;
  }

  isRightPlayerLose(): boolean {
    return this.getBallDomRect().right >= window.innerWidth;
  }
}
