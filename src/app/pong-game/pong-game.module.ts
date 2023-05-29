import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './components/ball/ball.component';
import { PlayerLeftComponent } from './components/player-left/player-left.component';
import { PlayerRightComponent } from './components/player-right/player-right.component';
import { ScoreComponent } from './components/score/score.component';
import { PongGameContainerComponent } from './containers/pong-game-container/pong-game-container.component';
import { PongGameRoutingModule } from './pong-game-routing.module';
import { StartGameBtnComponent } from './components/start-game-btn/start-game-btn.component';
import { PauseGameBtnComponent } from './components/pause-game-btn/pause-game-btn.component';
import { PlayerBaseComponent } from './components/player-base/player-base.component';

@NgModule({
  declarations: [
    ScoreComponent,
    PlayerLeftComponent,
    PlayerRightComponent,
    BallComponent,
    PongGameContainerComponent,
    StartGameBtnComponent,
    PauseGameBtnComponent,
    PlayerBaseComponent,
  ],
  imports: [CommonModule, PongGameRoutingModule],
})
export class PongGameModule {}
