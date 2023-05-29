import { Component } from '@angular/core';
import { PongGameService } from '../../services/pong-game.service';

@Component({
  selector: 'app-pause-game-btn',
  templateUrl: './pause-game-btn.component.html',
  styleUrls: ['./pause-game-btn.component.scss'],
})
export class PauseGameBtnComponent {
  constructor(public pongGameService: PongGameService) {}

  pauseGame() {
    this.pongGameService.pauseGame();
  }
}
