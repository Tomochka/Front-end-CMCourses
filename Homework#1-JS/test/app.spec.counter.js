describe("counter", () => {
    it("should output null", () => {
        expect(counter('text')).toBe(null);
    });

    it("should output value", () => {
        expect(counter(5)).toBe(5);
    });

    it("should output value", () => {
        expect(counter(1)).toBe(1);
    });

    it("should output value", () => {
        expect(counter(9)).toBe(9);
    });

    it("should output 9+", () => {
        expect(counter(10)).toBe("9+");
    });

    it("should output 0", () => {
        expect(counter(0)).toBe(0);
    });
});