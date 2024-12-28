import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementHistoryComponent } from './virement-history.component';

describe('VirementHistoryComponent', () => {
  let component: VirementHistoryComponent;
  let fixture: ComponentFixture<VirementHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirementHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirementHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
