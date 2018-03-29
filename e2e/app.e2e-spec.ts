import { Angular4SearchDevsPage } from "./app.po";

describe("angular4-search-devs App", () => {
  let page: Angular4SearchDevsPage;

  beforeEach(() => {
    page = new Angular4SearchDevsPage();
  });

  it("should display message saying find developers", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Find developers");
  });
});
