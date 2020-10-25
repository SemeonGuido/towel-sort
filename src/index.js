// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix.length == 0) return [];
    let result = [];
    let reverse = false;
    matrix.forEach(function (elem) {
        if (!reverse) {
            elem.forEach(function (one) {
                result.push(one);
            });
            reverse = true;
        } else {
            elem.reverse().forEach(function (one) {
                result.push(one);
            });
            reverse = false;
        }
    });

    return result;
}
