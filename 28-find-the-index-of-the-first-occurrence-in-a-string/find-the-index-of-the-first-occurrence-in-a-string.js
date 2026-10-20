/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    hlen = haystack.length;
    nlen = needle.length;
    if (nlen > hlen) {
        return -1
    }
    for (let i = 0; i <= hlen - nlen; i++) {
        if(haystack.slice(i,i+nlen)== needle){
            return i
        }
    }
    return -1
};