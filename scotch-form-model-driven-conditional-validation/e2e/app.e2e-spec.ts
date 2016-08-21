import { ScotchFormModelDrivenConditionalValidationPage } from './app.po';

describe('scotch-form-model-driven-conditional-validation App', function() {
  let page: ScotchFormModelDrivenConditionalValidationPage;

  beforeEach(() => {
    page = new ScotchFormModelDrivenConditionalValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
