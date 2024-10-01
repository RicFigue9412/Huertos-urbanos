import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasHuertoComponent } from './tareas-huerto.component';

describe('TareasHuertoComponent', () => {
  let component: TareasHuertoComponent;
  let fixture: ComponentFixture<TareasHuertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasHuertoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasHuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
