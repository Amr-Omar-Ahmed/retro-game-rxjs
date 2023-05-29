import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'pong-game',
    loadChildren: () =>
      import('./pong-game/pong-game.module').then((m) => m.PongGameModule),
  },
  {
    path: '**',
    redirectTo: 'pong-game',
  },
];

const config: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
