import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { KittensService } from './kittens.service';
import { Kitty } from '../interfaces/kitty.interface';

describe('KittensService', () => {
  let kittensService: KittensService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [KittensService]
    });

    kittensService = TestBed.inject(KittensService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(kittensService).toBeTruthy();
  });

  describe('getKittens', () => {
    it('should get a list of kittens', () => {
      const dummyKittens: Kitty[] = [{ url: 'https://example.com/kitty1.jpg', id: '1', height: 200, width: 300, breeds: [], }, { url: 'https://example.com/kitty2.jpg', id: '2', height: 180, width: 250, breeds: [], },];
      const page = 1;

      kittensService.getKittens(page).subscribe((kittens) => {
        expect(kittens).toEqual(dummyKittens);
      });

      const req = httpTestingController.expectOne(
        `${kittensService.base_url}/images/search?limit=25&page=${page}&has_breeds=1&api_key=${kittensService.api_key}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyKittens);
    });
  });

  describe('getKitty', () => {
    it('should get a single kitty', () => {
      const dummyKitty = { url: 'https://example.com/kitty3.jpg', id: '3', height: 700, width: 600, breeds: [] };
      const kittyId = '1';

      kittensService.getKitty(kittyId).subscribe((kitty) => {
        expect(kitty).toEqual(dummyKitty);
      });

      const req = httpTestingController.expectOne(
        `${kittensService.base_url}/images/${kittyId}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyKitty);
    });
  });
});
