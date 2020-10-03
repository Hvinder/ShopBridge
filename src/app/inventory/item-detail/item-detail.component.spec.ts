import { MockService } from 'src/app/core/mock-service';
import { mockItems } from 'src/app/item-form/mocks/items.mock';
import { ItemDetailComponent } from './item-detail.component';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  const activatedroute = new MockService();
  const itemService = new MockService();

  beforeEach(() => {
    component = new ItemDetailComponent(activatedroute as any, itemService as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getItem on innit', () => {
    spyOn(component, 'getItem');
    component.ngOnInit();
    expect(component.getItem).toHaveBeenCalledWith(1);
  });

  it('should test getItem', () => {
    component.getItem(1);
    expect(itemService.getItemById).toHaveBeenCalledWith(1);
    expect(component.item).toBe(mockItems[0]);
  });
});
