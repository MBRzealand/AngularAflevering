import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTypesComponent } from './binding-types.component';

describe('BindingTypesComponent', () => {
  let component: BindingTypesComponent;
  let fixture: ComponentFixture<BindingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
