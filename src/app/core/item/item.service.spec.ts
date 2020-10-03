import { mockItems } from 'src/app/item-form/mocks/items.mock';
import { MockApiService, MockService } from '../mock-service';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  const itemApiService = new MockApiService();
  const snackBar = new MockService();
  beforeEach(() => {
    service = new ItemService(itemApiService as any, snackBar as any);
    service.items = mockItems;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getItemById', () => {
    const expected = service.getItemById(1);
    const actual = mockItems.find(item => item.objectId === 1);
    expect(expected).toEqual(actual);
  });

  it('should test addItem', () => {
    spyOn(service, 'dispatchItems');
    spyOn(service, 'openErrorSnackbar');
    service.addItem(mockItems[0]);
    expect(itemApiService.addItem).toHaveBeenCalledWith(mockItems[0]);
    expect(service.dispatchItems).toHaveBeenCalled();
    expect(service.openErrorSnackbar).not.toHaveBeenCalled();
  });

  it('should test fetchItems', () => {
    spyOn(service, 'dispatchItems');
    service.fetchItems();
    expect(itemApiService.fetchItems).toHaveBeenCalled();
    expect(service.dispatchItems).toHaveBeenCalled();
    expect(service.items).toEqual(mockItems);
  });

  it('should test removeItem', () => {
    spyOn(service, 'dispatchItems');
    service.removeItem(1);
    expect(itemApiService.deleteItem).toHaveBeenCalled();
    expect(service.dispatchItems).toHaveBeenCalled();
  });

  it('should test dispatchItems', () => {
    service.dispatchItems();
    expect(service.isApiLoading).toBeFalsy();
  });

  it('should test openErrorSnackbar', () => {
    service.openErrorSnackbar('');
    expect(service.isApiLoading).toBeFalsy();
    expect(snackBar.open).toHaveBeenCalled();
  });
});
