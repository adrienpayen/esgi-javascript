console.log(":" + leet("AnacOnda" + ":"));

function isNull(str) {
    return str === "" || str === null;
}

function ucfirst(str) {
    if (isNull(str)) {
        return Error;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(str) {
    if (isNull(str)) {
        return Error;
    }

    let list = [];

    str.split(' ').forEach(function(e) {
        list.push(ucfirst(e));
    });

    return list.join(' ')
}

function camelCase(str) {
    if (isNull(str)) {
        return Error;
    }

    return capitalize(str).replace(/\s/g, '');
}

function snake_case(str) {
    if (isNull(str)) {
        return Error;
    }

    return str.toLowerCase().replace(/\s/g, '_')
}


function leet(str) {
    

    return str;
}

function prop_access() {

}

function verlan() {

}

function yoda() {

}

function vig() {

}

function checkStr(str){

}