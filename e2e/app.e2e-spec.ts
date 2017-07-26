import { VoxshadowPage } from './app.po';

describe('voxshadow App', () => {
  let page: VoxshadowPage;

  beforeEach(() => {
    page = new VoxshadowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
