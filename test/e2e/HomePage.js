describe("Homepage End-to-end Test", () => {
  it("tests if homepage is loaded", (browser) => {
    browser
      .navigateTo("http://localhost:8080")
      .assert.visible("#app h1")
      .expect.elements("#app [data-book-id]")
      .count.toEqual(4);
  });

  it("tests if anonymous user can add book to a cart", (browser) => {
    browser.expect.elements("[data-book-id] button").count.toEqual(0);
  });

  after((browser) => browser.end());
});
