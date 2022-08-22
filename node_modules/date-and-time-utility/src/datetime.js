const numberValidator = require('./validators/numberValidator');
const dateRepository = require('./repositories/dateRepository');

/**
 * Tells a user what it will be this time tomorrow
 *
 * @return {Date}
 */
exports.thisTimeTomorrow = function() {

    const date = new Date();

    return dateRepository.addDaysToDate(date, 1);
};

/**
 * Tells a user what it will be this time next week
 *
 * @return {Date}
 */
exports.thisTimeNextWeek = function() {

    const date = new Date();

    return dateRepository.addDaysToDate(date, 7);
};

/**
 * Tells a user what it will be this time next month
 *
 * @return {Date}
 */
exports.thisTimeNextMonth = function() {

    const date = new Date();

    return dateRepository.addMonthsToDate(date, 1);
};

/**
 * Tells a user what it will be this time next year
 *
 * @return {Date}
 */
exports.thisTimeNextYear = function() {

    const date = new Date();

    return dateRepository.addMonthsToDate(date, 12);
};

/**
 * Tells a user what it was this time yesterday
 *
 * @return {Date}
 */
exports.thisTimeYesterday = function() {

    const date = new Date();

    return dateRepository.addDaysToDate(date, -1);
};

/**
 * Tells a user what it was this time last week
 *
 * @return {Date}
 */
exports.thisTimeLastWeek = function() {

    const date = new Date();

    return dateRepository.addDaysToDate(date, -7);
};

/**
 * Tells a user what it was this time last month
 *
 * @return {Date}
 */
exports.thisTimeLastMonth = function() {

    const date = new Date();

    return dateRepository.addMonthsToDate(date, -1);
};

/**
 * Tells a user what it was this time last year
 *
 * @return {Date}
 */
exports.thisTimeLastYear = function() {

    const date = new Date();

    return dateRepository.addMonthsToDate(date, -12);
};

/**
 * Tells a user what time it will be a set number of seconds from now
 *
 * @return {Date}
 */
exports.secondsFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addSecondsToDate(date, number);
};

/**
 * Tells a user what time it will be a set number of minutes from now
 *
 * @return {Date}
 */
exports.minutesFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addSecondsToDate(date, number * 60);
};

/**
 * Tells a user what time it will be a set number of hours from now
 *
 * @return {Date}
 */
exports.hoursFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addSecondsToDate(date, number * 60 * 60);
};

/**
 * Tells a user what time it will be a set number of days from now
 *
 * @return {Date}
 */
exports.daysFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addDaysToDate(date, number);
};

/**
 * Tells a user what time it will be a set number of weeks from now
 *
 * @return {Date}
 */
exports.weeksFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addDaysToDate(date, number * 7);
};

/**
 * Tells a user what time it will be a set number of months from now
 *
 * @return {Date}
 */
exports.monthsFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addMonthsToDate(date, number);
};

/**
 * Tells a user what time it will be a set number of years from now
 *
 * @return {Date}
 */
exports.yearsFromNow = function(number) {

    numberValidator.validateIsInstanceOf(number);

    const date = new Date();

    return dateRepository.addMonthsToDate(date, number * 12);
};