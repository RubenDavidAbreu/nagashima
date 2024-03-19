import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreursComponent } from './erreurs.component';

describe('ErreursComponent', () => {
  let component: ErreursComponent;
  let fixture: ComponentFixture<ErreursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErreursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErreursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
