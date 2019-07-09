import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFormPage } from './animal-form.page';

describe('AnimalFormPage', () => {
  let component: AnimalFormPage;
  let fixture: ComponentFixture<AnimalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
