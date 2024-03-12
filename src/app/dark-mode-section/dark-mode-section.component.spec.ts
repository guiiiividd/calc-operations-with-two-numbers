import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeSectionComponent } from './dark-mode-section.component';

describe('DarkModeSectionComponent', () => {
  let component: DarkModeSectionComponent;
  let fixture: ComponentFixture<DarkModeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkModeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
