import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLeftComponent } from './player-left.component';

describe('PlayerLeftComponent', () => {
  let component: PlayerLeftComponent;
  let fixture: ComponentFixture<PlayerLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
