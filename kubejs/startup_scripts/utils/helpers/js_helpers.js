/** @param {any} fn */
Array.prototype.flatMap = function (fn) {
    return Array.prototype.concat.apply([], this.map(fn));
};
