import { MeuPrimeiroPage } from './app.po';

describe('meu-primeiro App', () => {
  let page: MeuPrimeiroPage;

  beforeEach(() => {
    page = new MeuPrimeiroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
