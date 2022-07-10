describe("Homepage End-to-end Test", () => {
  it("tests if homepage is loaded", (browser) => {
    browser
      .navigateTo("http://localhost:8080/")
      .assert.visible("#root h1")
      .expect.elements("#root [data-book-id]")
      .count.toEqual(4);
  });

  it("tests if anonymous user can try buy a book", (browser) => {
    browser.assert.elementPresent("[data-book-id] button");
  });

  it("tests if anonymous user can try log in", (browser) => {
    browser.expect.element("[data-login-button]").to.be.present;
    browser.expect.element("[data-register-button]").to.be.present;
  });

  after((browser) => browser.end());
});
