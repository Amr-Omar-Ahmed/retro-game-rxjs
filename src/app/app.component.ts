import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  fromEvent,
  filter,
  map,
  startWith,
  combineLatest,
  interval,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // @ViewChild('canvas', { static: true })
  // canvasRef: ElementRef<HTMLCanvasElement>;
  // context: CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    // this.context = this.canvasRef.nativeElement.getContext('2d');
    // this.initGame();
  }

  initGame() {
    // debugger;
    // // Create observables for player input
    // const player1Input$ = fromEvent(document, 'keydown').pipe(
    //   filter((event: any) => event.key === 'w' || event.key === 's'),
    //   map((event: KeyboardEvent) => (event.key === 'w' ? -5 : 5)),
    //   startWith(0)
    // );
    // const player2Input$ = fromEvent(document, 'keydown').pipe(
    //   filter(
    //     (event: any) => event.key === 'ArrowUp' || event.key === 'ArrowDown'
    //   ),
    //   map((event: KeyboardEvent) => (event.key === 'ArrowUp' ? -5 : 5)),
    //   startWith(0)
    // );
    // // Update game state based on player input
    // combineLatest([player1Input$, player2Input$]).subscribe(
    //   ([player1Input, player2Input]) => {
    //     // this.state.player1.dy = player1Input;
    //     // this.state.player2.dy = player2Input;
    //   }
    // );
    // // Game update loop
    // interval(1000 / 60) // 60 FPS
    //   .subscribe(() => {
    //     this.update();
    //     this.render();
    //   });
  }

  update() {
    //   // Update game state
    //   // ...
    //   // Check collision with paddles
    //   // ...
  }

  render() {
    // // Clear canvas
    // this.context?.clearRect(
    //   0,
    //   0,
    //   this.canvasRef.nativeElement.width,
    //   this.canvasRef.nativeElement.height
    // );
    // // Render game elements
    // // ...
  }
}
