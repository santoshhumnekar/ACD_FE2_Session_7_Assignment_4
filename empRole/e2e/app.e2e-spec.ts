import { EmpRolePage } from './app.po';

describe('emp-role App', function() {
  let page: EmpRolePage;

  beforeEach(() => {
    page = new EmpRolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
