import { TestBed } from '@angular/core/testing';
import { MiservicioService } from './miservicio.service';
describe('MiservicioService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MiservicioService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=miservicio.service.spec.js.map