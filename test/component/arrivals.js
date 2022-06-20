describe("New Arrivals Component Test", function () {
  let component;

  before(async () => {
    component = await browser.mockNetworkResponse("/api/books", {
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
  });

  it("tests the component", function (browser) {
    expect(component).to.be.visible;

    expect(component).text.toContain("The Memory Police");

    expect(component.findAll("h2 ~ div > div")).length(1);
  });

  it("logs the innerHTML property", async function (browser) {
    await browser.getElementProperty(component, "innerHTML");
    browser.assert.textContains(component, "The Memory Police");
  });
});
