import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRightComponent } from './player-right.component';

describe('PlayerRightComponent', () => {
  let component: PlayerRightComponent;
  let fixture: ComponentFixture<PlayerRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
