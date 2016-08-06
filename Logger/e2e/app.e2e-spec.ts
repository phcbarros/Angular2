import { LoggerPage } from './app.po';

describe('logger App', function() {
  let page: LoggerPage;

  beforeEach(() => {
    page = new LoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
