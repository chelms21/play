/**
 * Takes an entity that you would like to validate that it is a Number
 *
 * @param entity This is the entity that you would like to validate
 * @throws
 */
exports.validateIsInstanceOf = function(entity) {

    const isType = (!isNaN(entity));

    if(isType === false){
        throw new Error(`You must give a valid Number`);
    }
};