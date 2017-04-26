import { ImperativePage } from './app.po';

describe('imperative App', () => {
  let page: ImperativePage;

  beforeEach(() => {
    page = new ImperativePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
