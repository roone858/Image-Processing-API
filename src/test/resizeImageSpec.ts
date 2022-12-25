import { resizeImage } from "../resizeImage";

describe("images", () => {
  it("Resolves succesfully when provided the right filename, height and width parameters", async () => {
    await expectAsync(resizeImage(`fjord`, 200, 200)).toBeResolved();
  });

  it("Throws a missing input error if the wrong filename is provided", async () => {
    await expectAsync(resizeImage("alaska", 200, 200)).toBeRejectedWithError(
      Error,
      "Input file is missing"
    );
  });
});