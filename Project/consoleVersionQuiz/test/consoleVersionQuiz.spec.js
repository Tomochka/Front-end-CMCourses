var db = [
    {
        "id": 1,
        "name": "Тэги разметки заключаются между знаками…",
        "tags": "html",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "/…/",
                "point": false
            },
            {
                "name": "<...>",
                "point": true
            },
            {
                "name": "|…|",
                "point": false
            },
            {
                "name": "#…#",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x200/000/fff"
    },
    {
        "id": 2,
        "name": "Для чего используется язык HTML?",
        "tags": "html",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "для создания текстового документа",
                "point": false
            },
            {
                "name": "для создания программ",
                "point": false
            },
            {
                "name": "для создания Web-страниц",
                "point": true
            },
            {
                "name": "для работы в Internet",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 3,
        "name": "Тело документа заключается в тэге…",
        "tags": "html",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<body></body>",
                "point": true
            },
            {
                "name": "<html></html>",
                "point": false
            },
            {
                "name": "<head></head>",
                "point": false
            },
            {
                "name": "<font></font>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 4,
        "name": "Для перехода текста на новую строку используется тэг…",
        "tags": "html",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<html>",
                "point": false
            },
            {
                "name": "<br>",
                "point": true
            },
            {
                "name": "<font>",
                "point": false
            },
            {
                "name": "<body>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 5,
        "name": "Какое расширение имеют Web-страницы?",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": ".txt",
                "point": false
            },
            {
                "name": ".html",
                "point": true
            },
            {
                "name": ".doc",
                "point": false
            },
            {
                "name": ".exe",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 6,
        "name": "Из какого количества шестнадцатеричных символов кодируется цвет в HTML?",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "двух",
                "point": false
            },
            {
                "name": "восьми",
                "point": false
            },
            {
                "name": "шестнадцати",
                "point": false
            },
            {
                "name": "шести",
                "point": true
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 7,
        "name": "Какой из тэгов является непарным?",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<head>",
                "point": false
            },
            {
                "name": "<br>",
                "point": true
            },
            {
                "name": "<title>",
                "point": false
            },
            {
                "name": "<html>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 8,
        "name": "Какой тег позволяет вставлять картинки в HTML документы?",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<pic>",
                "point": false
            },
            {
                "name": "<image>",
                "point": false
            },
            {
                "name": "<img>",
                "point": true
            },
            {
                "name": "<picture>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 9,
        "name": "С помощью какого тэга можно сделать текст жирным?",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<b>",
                "point": true
            },
            {
                "name": "<i>",
                "point": false
            },
            {
                "name": "<big>",
                "point": false
            },
            {
                "name": "<h2>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 10,
        "name": "Укажите тег позволяющий подключить к HTML документу скрипты выполняющиеся на стороне клиента.",
        "type_answer": "radioButton",
        "answers": [
            {
                "name": "<client>",
                "point": false
            },
            {
                "name": "<script>",
                "point": true
            },
            {
                "name": "<object>",
                "point": false
            },
            {
                "name": "<applet>",
                "point": false
            }
        ],
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    }
]

describe('consoleVersionQuiz', function () {
    it("should output 'Данные некорректны'", function () {
        expect(quiz(db, 10, 5)).toBe('Данные некорректны');
    });

    it("if an incorrect answer is entered should output 'Есть некорректные ответы'", function () {
        expect(quiz(db, 1, 5, 1, 2, 4, 1, 2, 3, 4, 2)).toBe('Есть некорректные ответы');
    });

    it("if answers [2,3,1,2,2,4,2,3,1,2] should output 10", function () {
        expect(quiz(db, 2, 3, 1, 2, 2, 4, 2, 3, 1, 2)).toBe(10);
    });

    it("if answers [1,2,4,3,4,3,1,2,2,4] should output 0", function () {
        expect(quiz(db, 1, 2, 4, 3, 4, 3, 1, 2, 2, 4)).toBe(0);
    });

    it("if answers [1,1,1,2,2,1,1,3,1,4] should output 5", function () {
        expect(quiz(db, 1, 1, 1, 2, 2, 1, 1, 3, 1, 4)).toBe(5);
    });

});

