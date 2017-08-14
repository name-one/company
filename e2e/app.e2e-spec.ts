import { NameOnePage } from './app.po';

describe('name-one App', () => {
  let page: NameOnePage;

  beforeEach(() => {
    page = new NameOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
