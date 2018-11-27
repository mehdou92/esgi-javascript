function ucfirst(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.charAt(0).toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i].toLowerCase();
        }
    }

    return temp;
}

function camelCase(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (!str[i - 1] || str[i - 1] === ' ' || str[i - 1] === '_') {
            temp += str[i].toUpperCase();
        } else {
            temp += str[i].toLowerCase();
        }
    }

    return temp.replace(/[ _]/g, '');
}

function snake_case(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.replace(/ /g, '_').toLowerCase();
}

function leet(str) {
    if (typeof str !== 'string') {
        return '';
    }

    const voyelles = { 'A': '4', 'E': '3', 'I': '1', 'O': '0', 'U': '(_)', 'Y': '7' };
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        if (voyelles[str[i].toUpperCase()]) {
            temp += voyelles[str[i].toUpperCase()];
        } else {
            temp += str[i];
        }
    }

    return temp;
}

function verlan(str) {
    if (typeof str !== 'string') {
        return '';
    }

    let temp = str.split(' ');
    var verlan = [];

    for (let i = 0; i < temp.length; i++) {
        let toBeReversed = temp[i].split('');
        let reversedArray = toBeReversed.reverse();
        verlan.push(reversedArray.join(''));
    }

    return verlan.join(' ');
}

function yoda(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.split(' ').reverse().join(' ');
}

function vig(mot, clef) {
    if (typeof mot != "string" || typeof clef != "string"){
        return "";
    }
    motCrypte = "";
    cptSpace = 0;
    for(var i = 1;i <= mot.length; i++) {
        if(mot.charAt(i-1) != " ") {
            codeLettre = mot.toUpperCase().charCodeAt(i-1)-65;
            decalage = clef.toUpperCase().charCodeAt((i-1-cptSpace)%clef.length)-65;
            lettre = String.fromCharCode(65+(codeLettre+decalage)%26);
            motCrypte = motCrypte.concat('', lettre);
        } else {
            cptSpace++
            motCrypte = motCrypte.concat('', ' ');
        }
    }
    return motCrypte.toLowerCase();
}

function prop_access(object, path) {
    if (typeof path != "string"){
        return object;
    }

    if(typeof object != 'object' || object == null) {
        console.log(path + ' not exist');
        return;
    }
    if (path === null || path === '') {
        return object;
    }

    const props = path.split('.');
    let property = object;
    props.forEach(function (prop) {
        if(!property.hasOwnProperty(prop)) {
            console.log(path + ' not exist');
            return;
        }
        property = property[prop];
    });
    return property;
}
