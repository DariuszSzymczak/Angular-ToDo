import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VLineComponent } from './v-line.component';

describe('VLineComponent', () => {
  let component: VLineComponent;
  let fixture: ComponentFixture<VLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
