
import { MockService } from 'src/app/core/mock-service';
import { mockItems } from 'src/app/item-form/mocks/items.mock';
import { ItemCardComponent } from './item-card.component';

describe('ItemCardComponent', () => {
  let component: ItemCardComponent;
  const itemService = new MockService();
  const router = new MockService();

  beforeEach(() => {
    component = new ItemCardComponent(itemService as any, router as any);
    component.item = mockItems[0];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test removeItem', () => {
    component.removeItem(1);
    expect(itemService.removeItem).toHaveBeenCalledWith(1);
  });
});
