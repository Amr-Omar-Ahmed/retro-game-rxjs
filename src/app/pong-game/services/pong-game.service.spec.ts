import { TestBed } from '@angular/core/testing';

import { PongGameService } from './pong-game.service';

describe('PongGameService', () => {
  let service: PongGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PongGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
