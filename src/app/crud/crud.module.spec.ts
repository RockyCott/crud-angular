import { CrudModule } from './crud.module';

describe('CrudModule', () => {
  const module: CrudModule = new CrudModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
