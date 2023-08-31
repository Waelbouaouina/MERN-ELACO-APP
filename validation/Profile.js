const isEmpty = require('../validation/isEmpty');
const validator = require('validator')


module.exports = function ValidateProfile(data) {

    let errors = {};

    data.tel = !isEmpty(data.tel) ? data.tel : ""
    data.country = !isEmpty(data.country) ? data.country : ""
    data.city = !isEmpty(data.city) ? data.city : ""
    data.postalcode = !isEmpty(data.postalcode) ? data.postalcode : ""
    data.bio = !isEmpty(data.bio) ? data.bio : ""
    data.address = !isEmpty(data.address) ? data.address : ""



    if (validator.isEmpty(data.tel)) {
        errors.tel = "Required Telephone Number !";
    }

    if (validator.isEmpty(data.country)) {
        errors.country = "Required country !";
    }

    if (validator.isEmpty(data.city)) {
        errors.city = "Required city !";
    }


    if (validator.isEmpty(data.posotalcode)) {
        errors.posotalcode = "Required posotalcode !";
    }

    if (validator.isEmpty(data.bio)) {
        errors.bio = "Required bio !";
    }

    if (validator.isEmpty(data.address)) {
        errors.address = "Required address !";
    }






    return {
        errors,
        isValid: isEmpty(errors)
    }

};
