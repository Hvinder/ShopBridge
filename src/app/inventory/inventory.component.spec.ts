import { MockService } from '../core/mock-service';
import { mockItems } from '../item-form/mocks/items.mock';
import { InventoryComponent } from './inventory.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  const itemService = new MockService();

  beforeEach(() => {
    component = new InventoryComponent(itemService as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call fetchItems on init', () => {
    spyOn(itemService, 'fetchItems');
    component.ngOnInit();
    component.onResize(null);
    expect(itemService.fetchItems).toHaveBeenCalled();
    expect(component.items).toBe(mockItems);
  });
});
