import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGameBtnComponent } from './start-game-btn.component';

describe('StartGameBtnComponent', () => {
  let component: StartGameBtnComponent;
  let fixture: ComponentFixture<StartGameBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartGameBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartGameBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
