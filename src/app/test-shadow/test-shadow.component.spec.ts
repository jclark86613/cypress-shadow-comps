import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShadowComponent } from './test-shadow.component';

describe('TestShadowComponent', () => {
  let component: TestShadowComponent;
  let fixture: ComponentFixture<TestShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestShadowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
