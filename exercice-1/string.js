function isString(chaine) {
    if(typeof chaine === 'string')
        return chaine;
    else
        return false;
}

function ucfirst(chaine){
    if(isString(chaine))
        return chaine.charAt(0).toUpperCase() + chaine.slice(1);
    else
        return '';
}

function capitalize(chaine){
    if(isString(chaine))
        return text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
}


console.log(ucfirst('hello world'));
console.log(capitalize('hello world zouzou pilo odeko'));