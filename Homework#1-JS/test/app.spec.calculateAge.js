// зачем здесь все эти переменные?
// достаточно просто проверить пару дат, как я сделал ниже
// хотя в твоём случае можно сказать получилось 100% покрытие тестами)))
// это перебор
// И ТАК НОРМАЛЬНО!
var dateNow = new Date();
var dateBeforeNowMonth = new Date(dateNow.getFullYear() - 10, dateNow.getMonth() - 1, dateNow.getDate());
var dateAfterNowMonth = new Date(dateNow.getFullYear() - 10, dateNow.getMonth() + 1, dateNow.getDate());
var dateSameNonthBefore = new Date(dateNow.getFullYear() - 10, dateNow.getMonth(), dateNow.getDate() - 1);
var dateSameNonthAfter = new Date(dateNow.getFullYear() - 10, dateNow.getMonth(), dateNow.getDate() + 1);
var dateSameYearBefore = new Date(dateNow.getFullYear(), dateNow.getMonth() - 1, dateNow.getDate());
var dateSameYearAndMonthBefore = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() - 1);
var dateSameYearAfter = new Date(dateNow.getFullYear(), dateNow.getMonth() + 1, dateNow.getDate());
var dateSameYearAndMonthAfter = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);

describe('calculateAge', () => {
    it("should output null because input the text", () => {
        expect(calculateAge("text")).toBe(null);
    });

    it("should output null because input date from the future", () => {
        expect(calculateAge("2032-02-02")).toBe(null);
    });

    it("should output age", () => {
        expect(calculateAge(dateBeforeNowMonth)).toBe(dateNow.getFullYear() - dateBeforeNowMonth.getFullYear());
    });

    it("should output age", () => {
        expect(calculateAge(dateAfterNowMonth)).toBe(dateNow.getFullYear() - dateAfterNowMonth.getFullYear() - 1);
    });

    it("should output age", () => {
        expect(calculateAge(dateSameNonthBefore)).toBe(dateNow.getFullYear() - dateSameNonthBefore.getFullYear());
    });

    it("should output age", () => {
        expect(calculateAge(dateSameNonthAfter)).toBe(dateNow.getFullYear() - dateSameNonthAfter.getFullYear() - 1);
    });

    it("should output 0", () => {
        expect(calculateAge(dateSameYearBefore)).toBe(0);
    });

    it("should output 0", () => {
        expect(calculateAge(dateSameYearAndMonthBefore)).toBe(0);
    });

    it("should output null input date from the future", () => {
        expect(calculateAge(dateSameYearAfter)).toBe(null);
    });

    it("should output null input date from the future", () => {
        expect(calculateAge(dateSameYearAndMonthAfter)).toBe(null);
    });
});

/*describe('calculateAge', function () {
    it('should be 28 for 12.12.1990', () => {
        expect(calculateAge(new Date('12.12.1990'))).toBe(28);
    });

    it('should be null for date in the future', () => {
        expect(calculateAge(new Date('12.12.2045'))).toBeNull();
    });

    it('should be null for incorrect data', () => {
        expect(calculateAge(new Date('12.02.1945'))).toBe(73); // 49?
    });

    it('should be null for incorrect data', () => {
        expect(calculateAge(null)).toBeNull(); // 49?
    });
});*/

