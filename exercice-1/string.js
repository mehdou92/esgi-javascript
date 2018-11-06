function isString(chaine) {
    if(typeof chaine === 'string')
        return chaine;
    else
        return false;
}

function ucfirst(chaine){
    if(isString(chaine))
        return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine){

}


console.log(ucfirst('hello world'));
console.log(capitalize('hello world zouzou pilo odeko'));