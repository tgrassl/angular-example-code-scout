import { TestBed, inject } from '@angular/core/testing';

import { ProfileService} from './profile.service';

describe('ProfileServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileService]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));
});
