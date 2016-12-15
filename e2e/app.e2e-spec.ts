import { HaksuPage } from './app.po';

describe('haksu App', function() {
  let page: HaksuPage;

  beforeEach(() => {
    page = new HaksuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
