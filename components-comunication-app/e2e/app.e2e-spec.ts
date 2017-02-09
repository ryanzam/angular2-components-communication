import { ComponentsComunicationAppPage } from './app.po';

describe('components-comunication-app App', function() {
  let page: ComponentsComunicationAppPage;

  beforeEach(() => {
    page = new ComponentsComunicationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
