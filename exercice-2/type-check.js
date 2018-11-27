function type_check_v1(elem, type) {

    switch (type) {
        case 'boolean':
            return typeof elem === "boolean";

        case 'null' :
            return elem === null;

        case 'undefined':
            return elem === undefined;

        case 'number':
            return typeof elem === "number";

        case 'string':
            return typeof elem === "string";

        case 'array':
            return !!Array.isArray(elem);

        case 'object' :
            if (typeof elem === "object" && Array.isArray(elem))
                return false;
            else if(typeof elem === "object" && elem === null)
                return false;
            else return typeof elem === "object";
    }
}

function myUndefined() {
    return undefined;
}

function myFunction() {
    console.log('beoeo');
}

//console.log(type_check_v1(1, "number"));
//console.log(type_check_v1("string", "number"));
//console.log(type_check_v1(true, "number"));
//console.log(type_check_v1({"prop1": 1}, "object"));
//console.log(type_check_v1(null, "null"));
//console.log(type_check_v1(null, "object"));
//console.log(type_check_v1(myUndefined, "undefined"));
//console.log(type_check_v1("string", "string"));
//console.log(type_check_v1([1, 2, 3], "array"));
//console.log(type_check_v1(myFunction, "function"));
//console.log(type_check_v1([1, 2, 3], "object"));