import { PersonTableComponent } from './person-table.component';

describe('PersonTableComponent', () => {
  let component: PersonTableComponent;

  beforeEach(() => {
    component = new PersonTableComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
