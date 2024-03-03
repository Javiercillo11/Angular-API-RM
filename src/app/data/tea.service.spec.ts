import { TestBed } from '@angular/core/testing';

import { TeaService } from './tea.service';

describe('TeaService', () => {
  let service: TeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
