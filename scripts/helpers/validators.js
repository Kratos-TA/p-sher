var validators = (function() {
    /* use strict */

    function validateUsername(username) {

        if (_validateIfString(username) && _validateLength(username, 6, 30) && _validateContents(username)) {
            return true;
        }

        return false;
    }

    function validateCookieText(text) {
        if (_validateIfString(text) && _validateLength(text, 6, 30)) {
            return true;
        }

        return false;
    }

    function validateCookieCategory(category) {
        if (_validateIfString(category) && _validateLength(category, 6, 30)) {
            return true;
        }

        return false;
    }

    function validateUrlAddress(url) {
        if (_validateIfString(url) && _validateUrl(url)) {
            return true;
        }

        return false;
    }

    function _validateIfString(obj) {
        return (typeof obj === 'string');
    }

    function _validateLength(str, min, max) {
        if (str.length >= min && str.length <= max) {
            return true;
        }

        return false;
    }

    function _validateContents(str) {
        return true;
    }

    function _validateUrl(str) {
        var validPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'); // port and path
        return validPattern.test(str);
    }

    return {
        validateUsername,
        validateCookieText,
        validateCookieCategory,
        validateUrlAddress
    };
}());

export {
    validators
};
