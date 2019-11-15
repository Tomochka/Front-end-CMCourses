var dbForTest = [
    { "id": 1, "name": "Innotype", "tags": "gov", "createdAt": "2014-12-02T11:10:49Z" },
    { "id": 2, "name": "Edgetag", "tags": "mil", "createdAt": "2012-05-20T00:15:15Z" },
    { "id": 3, "name": "Abata", "tags": "mil", "createdAt": "2016-06-23T01:05:33Z" },
    { "id": 4, "name": "Blogspan", "tags": "net", "createdAt": "2015-04-19T18:04:21Z" },
    { "id": 5, "name": "Jaxspan", "tags": "net", "createdAt": "2018-05-03T04:11:57Z" },
    { "id": 6, "name": "Pixope", "tags": "mil", "createdAt": "2019-07-30T18:42:24Z" },
    { "id": 7, "name": "Rhybox", "tags": "biz", "createdAt": "2017-01-11T06:57:13Z" },
    { "id": 8, "name": "Mynte", "tags": "edu", "createdAt": "2014-12-06T02:01:26Z" },
    { "id": 9, "name": "Vitz", "tags": "mil", "createdAt": "2010-11-14T22:56:25Z" },
    { "id": 10, "name": "Gabcube", "tags": "edu", "createdAt": "2017-12-22T00:00:04Z" },
]

var dbForTestJson = JSON.parse(JSON.stringify(dbForTest))

describe('search', () => {

    describe('sortByDate', () =>  {

        it("the first element when sorting in descending order of dates should output dbForTest[5]", () => {
            expect((dbForTestJson.sort((a, b) => sortByDate(a, b, true)))[0]).toEqual(dbForTest[5]);
        });

        it("the first element when sorting by ascending dates should output dbForTest[8]", () =>  {
            expect((dbForTestJson.sort((a, b) => sortByDate(a, b, false)))[0]).toEqual(dbForTest[8]);
        });
    });

    describe('filterByTag', () => {
        
        it("filtering by tag 'mil' must contain 4 elements", () =>  {
            expect(dbForTestJson.filter((item) => filterByTag(item, 'mil')).length).toBe(4);
        });

        it("filtering without a tag must contain 10 elements", () =>  {
            expect(dbForTestJson.filter((item) => filterByTag(item, null)).length).toBe(10);
        });
    });

    describe('isFunction', () =>  {
        
        it("should be true", () =>  {
            expect(isFunction(filterByTag)).toBe(true);
        });

        it("should be false", () =>  {
            expect(isFunction(77)).toBe(false);
        });
    });

    describe('isBoolean', () =>  {
        
        it("should be true", () =>  {
            expect(isBoolean(true)).toBe(true);
        });

        it("should be false", () =>  {
            expect(isBoolean('ok')).toBe(false);
        });
    });

    describe('isPositiveInteger', () =>  {
        
        it("should be true", () =>  {
            expect(isPositiveInteger(10)).toBe(true);
        });

        it("should be false", () =>  {
            expect(isPositiveInteger(-5)).toBe(false);
        });
    });
});

