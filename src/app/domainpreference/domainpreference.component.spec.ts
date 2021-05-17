import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainpreferenceComponent } from './domainpreference.component';

describe('DomainpreferenceComponent', () => {
  let component: DomainpreferenceComponent;
  let fixture: ComponentFixture<DomainpreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainpreferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainpreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
