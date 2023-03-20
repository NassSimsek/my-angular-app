import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelimComponent } from './kelim.component';

describe('KelimComponent', () => {
  let component: KelimComponent;
  let fixture: ComponentFixture<KelimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KelimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
