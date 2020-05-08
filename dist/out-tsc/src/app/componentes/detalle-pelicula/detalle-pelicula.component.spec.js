import { async, TestBed } from '@angular/core/testing';
import { DetallePeliculaComponent } from './detalle-pelicula.component';
describe('DetallePeliculaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetallePeliculaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetallePeliculaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detalle-pelicula.component.spec.js.map