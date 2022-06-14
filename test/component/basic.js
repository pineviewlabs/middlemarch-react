describe("Basic Component Test", () => {
  it("tests the component", async (browser) => {
    const component = await browser.mountComponent(
      "/src/pages/Home/components/Arrivals/index.jsx"
    );

    expect(component).to.be.present;
  });
});
