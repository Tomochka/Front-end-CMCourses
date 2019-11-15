
// неверно, лучше вместо комментария //yesOrNo сделать отдельный describe('yesOrNo')
// получаем в этом домашке на 4 функции должно быть 4 describe
// каждый describe описывается в своём файле обычно
// получаем должно быть 4 файла
// ИСПРАВЛЕНО!
describe("yesOrNo", () => {
    // в одном it должен быть один expect, это правило
    // ИСПРАВЛЕНО!
    it("should output yes", () => {
        expect(yesOrNo(true)).toBe("Yes");
    });

    it("should output no", () => {
        expect(yesOrNo(false)).toBe("No");
    });

    it("should output null", () => {
        expect(yesOrNo(6)).toBe(null);
    });
});