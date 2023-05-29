import { Component } from '@angular/core';
import { PongGameService } from '../../services/pong-game.service';

@Component({
  selector: 'app-start-game-btn',
  templateUrl: './start-game-btn.component.html',
  styleUrls: ['./start-game-btn.component.scss'],
})
export class StartGameBtnComponent {
  constructor(public pongGameService: PongGameService) {}

  startGame() {
    this.pongGameService.startGame();
  }
}
