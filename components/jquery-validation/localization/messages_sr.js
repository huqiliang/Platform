
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate'));;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SR (Serbian; српски језик)
 */
    $.extend($.validator.messages, {
        required: '\u041F\u043E\u0459\u0435 \u0458\u0435 \u043E\u0431\u0430\u0432\u0435\u0437\u043D\u043E.',
        remote: '\u0421\u0440\u0435\u0434\u0438\u0442\u0435 \u043E\u0432\u043E \u043F\u043E\u0459\u0435.',
        email: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u043D\u0443 \u0438-\u043C\u0435\u0458\u043B \u0430\u0434\u0440\u0435\u0441\u0443.',
        url: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0430\u043D URL.',
        date: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0430\u043D \u0434\u0430\u0442\u0443\u043C.',
        dateISO: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0430\u043D \u0434\u0430\u0442\u0443\u043C (ISO).',
        number: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0430\u043D \u0431\u0440\u043E\u0458.',
        digits: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0441\u0430\u043C\u043E \u0446\u0438\u0444\u0435.',
        creditcard: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0430\u043D \u0431\u0440\u043E\u0458 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u0446\u0435.',
        equalTo: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0438\u0441\u0442\u0443 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u043F\u043E\u043D\u043E\u0432\u043E.',
        extension: '\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0441\u0430 \u043E\u0434\u0433\u043E\u0432\u0430\u0440\u0430\u0458\u0443\u045B\u043E\u043C \u0435\u043A\u0441\u0442\u0435\u043D\u0437\u0438\u0458\u043E\u043C.',
        maxlength: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u043C\u0430\u045A\u0435 \u043E\u0434 {0} \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430.'),
        minlength: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0431\u0430\u0440\u0435\u043C {0} \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430.'),
        rangelength: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0434\u0443\u0433\u0430\u0447\u043A\u0443 \u0438\u0437\u043C\u0435\u0452\u0443 {0} \u0438 {1} \u043A\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430.'),
        range: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0438\u0437\u043C\u0435\u0452\u0443 {0} \u0438 {1}.'),
        max: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u043C\u0430\u045A\u0443 \u0438\u043B\u0438 \u0458\u0435\u0434\u043D\u0430\u043A\u0443 {0}.'),
        min: $.validator.format('\u0423\u043D\u0435\u0441\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u0435\u045B\u0443 \u0438\u043B\u0438 \u0458\u0435\u0434\u043D\u0430\u043A\u0443 {0}.')
    });
}));