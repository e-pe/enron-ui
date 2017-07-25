import { EnronUiPage } from './app.po';

describe('enron-ui App', () => {
  let page: EnronUiPage;

  beforeEach(() => {
    page = new EnronUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
