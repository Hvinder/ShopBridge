import { mockItems } from 'src/app/item-form/mocks/items.mock';
import { MockService } from '../mock-service';
import { ItemApiService } from './item-api.service';

describe('ItemApiService', () => {
  let service: ItemApiService;
  const http = new MockService();
  beforeEach(() => {
    service = new ItemApiService(http as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test fetchItems', () => {
    const expected = service.fetchItems();
    expect(http.get).toHaveBeenCalled();
    expected.subscribe(data => {
      expect(data).toBe(mockItems);
    });
  });
  it('should test addItem', () => {
    const expected = service.addItem(mockItems[0]);
    expect(http.post).toHaveBeenCalled();
    expected.subscribe(data => {
      expect(data).toBe(mockItems[0]);
    });
  });
  it('should test deleteItem', () => {
    const expected = service.deleteItem(0);
    expect(http.delete).toHaveBeenCalled();
    expected.subscribe(data => {
      expect(data).toBe(mockItems[0]);
    });
  });
});
