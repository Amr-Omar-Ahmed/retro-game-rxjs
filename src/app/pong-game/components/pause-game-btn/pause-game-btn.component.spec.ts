import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseGameBtnComponent } from './pause-game-btn.component';

describe('PauseGameBtnComponent', () => {
  let component: PauseGameBtnComponent;
  let fixture: ComponentFixture<PauseGameBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PauseGameBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PauseGameBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
