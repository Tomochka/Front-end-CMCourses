// в js используются '', "" почти никогда, ещё есть `` если внутри строки будет js переменная
// ИСПРАВЛЕНО!
function yesOrNo(value) {
    // после фигурной скобки всегда новая строка, идентично с определением функции yesOrNo
    // по реализации отлично
    if (typeof value == 'boolean') { return value == true ? 'Yes' : 'No'; }
    else { return null; }
}

function counter(total) {
    if (typeof total == 'number') {
        // по реализации отлично, оформление идентично пред моим заметкам
        if (total >= 1 && total <= 9) { return total; }
        else if (total > 9) { return '9+'; }
        else { return 0; }
    }
    else { return null; }
}

// плохая реализация, в js лучше не усложнять
// типовых задач крайне много
// https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
// ИСПРАВЛЕНО!
function calculateAge(date) {

    let dateNow = new Date();

    // лучше скопировать из инета как проверяют на валидность дату, у тебя предыдущая строка уже может упасть
    // причем date которая пришла параметром уже типа Date ожидается
    // ИСПРАВЛЕНО!
    if (!isNaN(Date.parse(date))) {

        let birthday = new Date(date);
        let age = dateNow.getFullYear() - birthday.getFullYear();
        let monthAge = birthday.getMonth() - dateNow.getMonth();
        let dateAge = birthday.getDate() - dateNow.getDate();

        if (age > 0 && (monthAge > 0 || (monthAge == 0 && dateAge > 0))) {

            age--;
        }

        if (age < 0 || (age == 0 && !(monthAge < 0 || (monthAge == 0 && dateAge < 0)))) {

            age = null;
        }

        return age;
    }
    else { return null; }
}

// list может быть null/undefined, тогда функция упадет при проверке list.length
// лучше Array.isArray(list)
// в остальном ок
// ИСПРАВЛЕНО!
function getRandomItem(list) {

    if (!Array.isArray(list)) {

        return null;
    }
    else {

        let listLength = list.length;

        if (listLength == 0) {
            return null;
        }

        let rnd = Math.floor(Math.random() * listLength);

        return list[rnd];
    }
}
