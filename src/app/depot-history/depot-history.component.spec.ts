import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotHistoryComponent } from './depot-history.component';

describe('DepotHistoryComponent', () => {
  let component: DepotHistoryComponent;
  let fixture: ComponentFixture<DepotHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
