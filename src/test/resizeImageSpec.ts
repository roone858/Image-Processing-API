import { resizeImage } from "../resizeImage";

describe("images", () => {
  it("Resolves succesfully when provided the right filename, height and width parameters", async () => {
    await expectAsync(resizeImage(`fjord`, 200, 200)).toBeResolved();
  });
});
