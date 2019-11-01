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

// здесь не тот случай когда стоит делать функции в функциях, эту задачу на себя возьмут модули, когда столкнемся,
// лучше отдельные функции, которые легко тестятся по отдельности
function quiz(items, ...Args) {
    // стоит вынести отдельной функцией preparedDB()
    var questions = JSON.parse(JSON.stringify(items));

    // стоит придумать более понятное имя, может пару слов скомбинировать
    function correctness(elem, current){
        return (elem >=1  && elem <= questions[current].answers.length);
    }

    // идея правильная для проверки, но структура не корректная, я описал причину в json
    function responseСheck(elem, current){
        return questions[current].answers[elem - 1].point;
    }

    // это условие отдельной функцией, впрочем, это не должно быть здесь, в тестах мы тестим основной код,
    // а не какие-то спец условия, которые срабатывают только в тестах
    // такая практика имеет быть и связана с мок-тестами, сейчас не тот случай
    //For test (start)
    if (Args.length !== 0) {

        if (Args.length !== questions.length) return 'Данные некорректны';

        var currentForTest = 0;
        var pointsForTest = 0;

        //Сhecking for correctness
        while (currentForTest < questions.length) {
            // идея понятная, но почему возвращается какая-то строка вместо true / false
            if (!correctness(Args[currentForTest], currentForTest)) return 'Есть некорректные ответы';

            currentForTest++;
            
        }

        currentForTest = 0;

        while (currentForTest < questions.length) {
            // у тебя Check содержит русскую букву, теряюсь в догадках как так
            if (responseСheck(Args[currentForTest], currentForTest)){ 
                pointsForTest++;
            }
            
            currentForTest++;
        }

        return pointsForTest;
    }
    //For test (end)


    //For console version
    var current = 0;
    var points = 0;
    var startDate = new Date();
    var timeForTestInMs = 20000;
    var endDate = startDate.getTime() + timeForTestInMs;

    // isTimerEnabled логичнее звучит
    function isTimeEnabled() {
        var now = new Date();
        return now <= endDate;
    }

    // первое условие стоит выделить в переменную, зачем намеренно усложнять код
    // решается отдельной функцией, код станет проще
    while (current < questions.length && isTimeEnabled()) {
        var answers = () => {
            var str = '';

            for (var i = 0; i < questions[current].answers.length; i++) {
                str += `${i + 1}) ${questions[current].answers[i].name} \n`;
            }

            return str;
        }

        var selectedAnswer = prompt(`Вопрос ${questions[current].id}/${questions.length}: ${questions[current].name} \n${answers()}`, '');
        // опять кириллица в названии, что это?!?
        var correсtAnswer = true;

        // реализация правильная, но вместо комментария стоит лучше выносить все в отдельные функции, которые легко тестить
        //Сheck if the answer is normal
        while (correсtAnswer) {
            if (correctness(selectedAnswer, current)) {

                if (responseСheck(selectedAnswer, current)) {
                    points++;
                }

                correсtAnswer = false;
            }
            else {
                selectedAnswer = prompt(`Введите корректный ответ.\nВопрос ${questions[current].id}/${questions.length}: ${questions[current].name} \n${answers()}`, '');
            }
        }

        current++;
    }

    alert(`Вы набрали ${points} балла(ов) из ${questions.length}`);
}

quiz(db);

