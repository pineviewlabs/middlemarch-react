describe("Basic Component Test", () => {
  it("tests the component", async (browser) => {
    const component = await browser.mockNetworkResponse("/api/books", {
      body: JSON.stringify({
        books: [
          {
            id: "article_identifier_sldkfjlkouw98",
            title: "The Memory Police",
            author: "Yoko Ogawa",
            image:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544335119l/37004370.jpg",
            price: 14.72,
            currency: "$",
            category: "Science Fiction > Dystopian",
            isbn13: 9781101911815,
            description:
                "On an unnamed island, objects are disappearing: first hats, then ribbons, birds, roses...",
          },
        ],
      })
    }).mountReactComponent(
      "/src/pages/Home/components/Arrivals/index.jsx"
    );

    expect(component).to.be.present;
  });
});
