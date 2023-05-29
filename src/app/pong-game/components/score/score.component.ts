import { Component, OnInit } from '@angular/core';
import { PongGameService } from '../../services/pong-game.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent {
  constructor(public pongGameService: PongGameService) {}
}
