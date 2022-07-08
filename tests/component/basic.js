describe("Basic Component Test", () => {
  it("tests the component", async (browser) => {
    await browser.mockNetworkResponse("/api/books", {
      status: 200,
      body: JSON.stringify([
        {
          id: "article_identifier_sldkfjlkouw98",
          title: "The Memory Police",
          author: "Yoko Ogawa",
          image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544335119l/37004370.jpg",
          price: 14.72,
          currency: "$",
          category: "Science Fiction > Dystopian",
          isbn13: 9781101911815,
          description:
              "On an unnamed island, objects are disappearing: first hats, then ribbons, birds, roses...",
        }
      ])
    });

    const component = await browser.mountComponent("/tests/component/Books.jsx");
    expect(component).to.be.present;
  });
});
