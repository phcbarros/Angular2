import { ScotchFormModelDrivenPage } from './app.po';

describe('scotch-form-model-driven App', function() {
  let page: ScotchFormModelDrivenPage;

  beforeEach(() => {
    page = new ScotchFormModelDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
