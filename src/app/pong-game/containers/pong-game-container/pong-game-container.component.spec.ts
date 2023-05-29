import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PongGameContainerComponent } from './pong-game-container.component';

describe('PongGameContainerComponent', () => {
  let component: PongGameContainerComponent;
  let fixture: ComponentFixture<PongGameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PongGameContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PongGameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
