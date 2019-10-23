describe("counter", function () {
    it("should output null", function () {
        expect(counter('text')).toBe(null);
    });

    it("should output value", function () {
        expect(counter(5)).toBe(5);
    });

    it("should output value", function () {
        expect(counter(1)).toBe(1);
    });

    it("should output value", function () {
        expect(counter(9)).toBe(9);
    });

    it("should output 9+", function () {
        expect(counter(10)).toBe("9+");
    });

    it("should output 0", function () {
        expect(counter(0)).toBe(0);
    });
});