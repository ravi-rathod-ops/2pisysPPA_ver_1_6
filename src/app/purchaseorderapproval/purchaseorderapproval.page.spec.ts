import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseorderapprovalComponent } from './purchaseorderapproval.page';

describe('PurchaseorderapprovalComponent', () => {
  let component: PurchaseorderapprovalComponent;
  let fixture: ComponentFixture<PurchaseorderapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseorderapprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseorderapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
