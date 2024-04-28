import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBlankDashComponent } from './nav-blank-dash.component';

describe('NavBlankDashComponent', () => {
  let component: NavBlankDashComponent;
  let fixture: ComponentFixture<NavBlankDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBlankDashComponent]
    });
    fixture = TestBed.createComponent(NavBlankDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
