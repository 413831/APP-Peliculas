import { async, TestBed } from '@angular/core/testing';
import { PeliculaListadoComponent } from './pelicula-listado.component';
describe('PeliculaListadoComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PeliculaListadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PeliculaListadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pelicula-listado.component.spec.js.map