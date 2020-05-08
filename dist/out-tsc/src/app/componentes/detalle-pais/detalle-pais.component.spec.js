import { async, TestBed } from '@angular/core/testing';
import { DetallePaisComponent } from './detalle-pais.component';
describe('DetallePaisComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetallePaisComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetallePaisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detalle-pais.component.spec.js.map