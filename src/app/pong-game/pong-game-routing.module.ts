import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PongGameContainerComponent } from './containers/pong-game-container/pong-game-container.component';

const routes: Routes = [
  {
    path: '',
    component: PongGameContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PongGameRoutingModule {}
