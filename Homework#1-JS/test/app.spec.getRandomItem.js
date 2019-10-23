var arrList = [5, 1, 2, 4];

function isIncludes(list, value) {

    var inList = false;

    for (var i = 0; i < list.length; i++) {

        if (value == list[i]) {
            return !inList;
        }
    }

    return inList;
}

describe('getRandomItem', function () {
    it('should be null for empty array', function () {
        expect(getRandomItem([])).toBe(null);
    });

    it('should be null for input text', function () {
        expect(getRandomItem('text')).toBe(null);
    });

    it('result of the function must be truthy', function () {
        expect(isIncludes(arrList, getRandomItem(arrList))).toBeTruthy();
    });
});