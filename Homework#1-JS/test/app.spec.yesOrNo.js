describe("yesOrNo", function () {
    it("should output yes", function () {
        expect(yesOrNo(true)).toBe("Yes");
    });

    it("should output no", function () {
        expect(yesOrNo(false)).toBe("No");
    });

    it("should output null", function () {
        expect(yesOrNo(6)).toBe(null);
    });
});