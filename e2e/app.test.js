describe("Example test", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('allows to change label text to "Hello world!"', async () => {
    await expect(element(by.id("title_label"))).toHaveText("Welcome!");
    await element(by.id("hello_button")).tap();
    await expect(element(by.id("title_label"))).toHaveText("Hello world!");
  });
});
