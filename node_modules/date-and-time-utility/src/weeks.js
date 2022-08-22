const dateValidator = require('./validators/dateValidator');

/**
 * Takes a date and determines how many weeks away it is from now
 *
 * @param {Date} date This is the date you would like to compare against
 * @return {Number}
 */
exports.fromCurrentTime = function(date) {

    dateValidator.validateIsInstanceOf(date);

    const now = new Date();

    return getUnitsBetweenDates(now, date);
};

/**
 * Takes two dates and determines how many weeks away they are from each other
 *
 * @param {Date} date1 This is the first date you would like to compare against
 * @param {Date} date2 This is the second date you would like to compare against
 * @return {Number}
 */
exports.betweenDates = function(date1, date2) {

    dateValidator.validateIsInstanceOf(date1);

    dateValidator.validateIsInstanceOf(date2);

    return getUnitsBetweenDates(date1, date2);
};

/**
 * Takes two dates and determines how many weeks away they are from each other
 *
 * @param {Date} date1 This is the first date you would like to compare against
 * @param {Date} date2 This is the second date you would like to compare against
 * @return {Number}
 */
function getUnitsBetweenDates(date1, date2) {

    const difference = date2 - date1;

    return Math.floor(((((difference / 1000) / 60) / 60) / 24) / 7);
}