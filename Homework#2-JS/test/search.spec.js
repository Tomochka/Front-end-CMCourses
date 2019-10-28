var db = [
    { "id": 1, "name": "Innotype", "content": "Donec quis orci eget orci vehicula condimentum.", "tags": "gov", "createdAt": "2014-12-02T11:10:49Z", "imageUrl": "http://dummyimage.com/250x213.jpg/cc0000/ffffff" },
    { "id": 2, "name": "Edgetag", "content": "Lorem ipsum dolor sit amet.", "tags": "mil", "createdAt": "2012-05-20T00:15:15Z", "imageUrl": "http://dummyimage.com/235x160.jpg/ff4444/ffffff" },
    { "id": 3, "name": "Abata", "content": "Etiam faucibus cursus urna.", "tags": "mil", "createdAt": "2016-06-23T01:05:33Z", "imageUrl": "http://dummyimage.com/223x124.jpg/cc0000/ffffff" },
    { "id": 4, "name": "Blogspan", "content": "Curabitur in libero ut massa.", "tags": "net", "createdAt": "2015-04-19T18:04:21Z", "imageUrl": "http://dummyimage.com/196x215.jpg/dddddd/000000" },
    { "id": 5, "name": "Jaxspan", "content": "Nunc rhoncus dui vel sem.", "tags": "net", "createdAt": "2018-05-03T04:11:57Z", "imageUrl": "http://dummyimage.com/178x222.jpg/5fa2dd/ffffff" },
    { "id": 6, "name": "Pixope", "content": "Pellentesque ultrices mattis odio.", "tags": "mil", "createdAt": "2019-07-30T18:42:24Z", "imageUrl": "http://dummyimage.com/119x166.jpg/ff4444/ffffff" },
    { "id": 7, "name": "Rhybox", "content": "Etiam vel augue.", "tags": "biz", "createdAt": "2017-01-11T06:57:13Z", "imageUrl": "http://dummyimage.com/152x102.jpg/dddddd/000000" },
    { "id": 8, "name": "Mynte", "content": "Duis aliquam convallis nunc.", "tags": "edu", "createdAt": "2014-12-06T02:01:26Z", "imageUrl": "http://dummyimage.com/138x105.jpg/5fa2dd/ffffff" },
    { "id": 9, "name": "Vitz", "content": "Integer ac neque.", "tags": "mil", "createdAt": "2010-11-14T22:56:25Z", "imageUrl": "http://dummyimage.com/116x106.jpg/dddddd/000000" },
    { "id": 10, "name": "Gabcube", "content": "In hac habitasse platea dictumst. ", "tags": "edu", "createdAt": "2017-12-22T00:00:04Z", "imageUrl": "http://dummyimage.com/159x157.jpg/ff4444/ffffff" },
]

describe('search', function () {
    it("should output null", function () {
        expect(search(db, -1, 5, filterByTag, sortByDate)).toBe(null);
    });

    it("should output null", function () {
        expect(search(db, 1, -3, filterByTag, sortByDate)).toBe(null);
    });
     
    it("should output null", function () {
        expect(search(db, 1, 1, null, sortByDate)).toBe(null);
    });

    it("should output null", function () {
        expect(search(db, 1, 1, filterByTag, 5)).toBe(null);
    });

    //Test for tags 'mil'
    it("equivalently [db[1], db[8]", function () {
        expect(search(db, 2, 2, filterByTag, sortByDate)).toEqual([db[1], db[8]]);
    });
});

