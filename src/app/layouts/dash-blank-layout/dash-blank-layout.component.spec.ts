import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBlankLayoutComponent } from './dash-blank-layout.component';

describe('DashBlankLayoutComponent', () => {
  let component: DashBlankLayoutComponent;
  let fixture: ComponentFixture<DashBlankLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashBlankLayoutComponent]
    });
    fixture = TestBed.createComponent(DashBlankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
