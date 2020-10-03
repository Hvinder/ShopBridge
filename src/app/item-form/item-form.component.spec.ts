import { MockService } from '../core/mock-service';
import { ItemFormComponent } from './item-form.component';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  const itemService = new MockService();

  beforeEach(() => {
    component = new ItemFormComponent(itemService as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoudl define form on init', () => {
    component.ngOnInit();
    expect(component.inventoryItem).toBeDefined();
  });

  it('should test onSelectFile', () => {
    const event = {target: {files: [null]}};
    component.onSelectFile(event);
    expect(component.imageUrl).toBeUndefined();
  });
  it('should test onSelectFile', () => {
    const img = new Blob(['testing'], { type: 'image/bmp' });
    const event = {target: {files: [img]}};
    component.onSelectFile(event);
    expect(component.imageUrl).toBeUndefined();
  });

  it('should test onSubmit', () => {
    spyOn(itemService, 'addItem');
    const form = {
      value: { itemName: '', itemDescription: '', itemPrice: '' },
    };
    component.onSubmit(form as any);
    expect(itemService.addItem).toHaveBeenCalled();
  });
});
