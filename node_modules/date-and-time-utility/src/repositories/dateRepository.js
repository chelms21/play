/**
 * Takes a date and adds a certain number of seconds to it
 *
 * @param {Date} date This is the date you would like to add to
 * @param {Number} seconds This is the number of months you would like to add
 * @return {Date}
 */
exports.addSecondsToDate = function(date, seconds) {

    date.setSeconds(date.getSeconds() + seconds);

    return date;
};

/**
 * Takes a date and adds a certain number of days to it
 *
 * @param {Date} date This is the date you would like to add to
 * @param {Number} days This is the number of days you would like to add
 * @return {Date}
 */
exports.addDaysToDate = function(date, days) {

    date.setDate(date.getDate() + days);

    return date;
};

/**
 * Takes a date and adds a certain number of months to it
 *
 * @param {Date} date This is the date you would like to add to
 * @param {Number} months This is the number of months you would like to add
 * @return {Date}
 */
exports.addMonthsToDate = function(date, months) {

    date.setMonth(date.getMonth() + months);

    return date;
};