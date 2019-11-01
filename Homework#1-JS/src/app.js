// так, а где собственно весь мой фидбек?! даже если не исправленный, прикинь я бы сча заново начал все это проверять
function yesOrNo(value) {
    if (typeof value == 'boolean') { return value == true ? 'Yes' : 'No'; }
    else { return null; }
}

function counter(total) {
    if (typeof total == "number") {

        if (total >= 1 && total <= 9) { return total; }
        else if (total > 9) { return '9+'; }
        else { return 0; }
    }
    else { return null; }
}

function calculateAge(date) {

    let dateNow = new Date();

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
