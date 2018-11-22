import { FileSizePipe } from "./filesize.pipe"

describe("FileSizePipe", () => {
  describe("Isolate FileSizePipe test", () => {
    const pipe = new FileSizePipe()

    it("should convert bytes to megabyte", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB")
      expect(pipe.transform(987654321)).toBe("941.90MB")
    })

    it("should use the default extension when not supplied", () => {
      expect(pipe.transform(123456789)).toBe("117.74MB")
      expect(pipe.transform(987654321)).toBe("941.90MB")
    })

    it("should override the extension when supplied", () => {
      expect(pipe.transform(123456789, "myExt")).toBe("117.74myExt")
      expect(pipe.transform(987654321, "myExt")).toBe("941.90myExt")
    })
  })
})
