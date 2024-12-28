import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCompteComponent } from './details-compte.component';

describe('DetailsCompteComponent', () => {
  let component: DetailsCompteComponent;
  let fixture: ComponentFixture<DetailsCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCompteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
