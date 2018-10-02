function type_check_v1(arg1, arg2) {
    if (typeof arg1 === arg2) {
        return true;
    }

    if (arg1 === null && arg2 === "null") {
        return true;
    }

    if (Array.isArray(arg1) && arg2 === "array") {
        return true;
    }

    return false;
}

function checkArray(arg1, arg2) {
    for (var prop in arg2) {
        if (arg2[prop] === arg1) {
            return true;
        }
    }

    return false;
}

function type_check_v2(arg1, arg2) {
    if (arg2.type && !type_check_v1(arg1, arg2.type)) {
        return false;
    }

    if (arg2.value && arg2.value !== arg1) {
        return false;
    }

    if (arg2.enum && checkArray(arg1, arg2.enum)) {
        return false;
    }

    return true;
}