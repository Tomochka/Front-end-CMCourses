// в тестах не должно быть условий и циклов
// я бы проверил так
// var result = getRandomItem([1,2,3]);
// expect(result >=1 && result <=3).toBeTruthy()
// ИСПРАВЛЕНО! (Условия и циклы вынесены за тест)
var arrList = [5, 1, 2, 4];

// функции которые начинаются с большой буквы это конструкторы для ООП
// здесь просто isIncluded(list, value)
// ИСПРАВЛЕНО!
function isIncludes(list, value) {

    var inList = false;

    for (var i = 0; i < list.length; i++) {

        if (value == list[i]) {
            return !inList;
        }
    }

    return inList;
}

describe('getRandomItem', () => {
    it('should be null for empty array', () => {
        expect(getRandomItem([])).toBe(null);
    });

    it('should be null for input text', () => {
        expect(getRandomItem('text')).toBe(null);
    });

    it('result of the function must be truthy', () => {
        expect(isIncludes(arrList, getRandomItem(arrList))).toBeTruthy();
    });
});