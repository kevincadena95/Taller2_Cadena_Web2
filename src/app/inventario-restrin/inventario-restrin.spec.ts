import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioRestrin } from './inventario-restrin';

describe('InventarioRestrin', () => {
  let component: InventarioRestrin;
  let fixture: ComponentFixture<InventarioRestrin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventarioRestrin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioRestrin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
