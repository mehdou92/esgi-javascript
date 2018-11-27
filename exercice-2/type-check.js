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

            case 'object' :
                return typeof elem === "object";

            default:
                return false;
    }
}

//console.log(type_check_v1(undefined, 'undefined'));
//console.log(type_check_v1('toto', 'undefined'));
//type_check_v1('string', 'string');
//type_check_v1(1, 'number');
//type_check_v1(null, 'number');