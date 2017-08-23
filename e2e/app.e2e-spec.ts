import { PracticasIntermediaPage } from './app.po';

describe('practicas-intermedia App', () => {
  let page: PracticasIntermediaPage;

  beforeEach(() => {
    page = new PracticasIntermediaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
