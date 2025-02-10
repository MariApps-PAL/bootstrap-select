/*!
 * Copyright 2012-2025 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery", "bootstrap"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"), require("bootstrap"));
  } else {
    factory(root["jQuery"], root["bootstrap"]);
  }
}(this, function (jQuery, bootstrap) {

(function ($) {
  $.fn.selectpicker.defaults = {
    noneSelectedText: 'Нічого не вибрано',
    noneResultsText: 'Збігів не знайдено {0}',
    countSelectedText: 'Вибрано {0} із {1}',
    maxOptionsText: ['Досягнута межа ({n} {var} максимум)', 'Досягнута межа в групі ({n} {var} максимум)', ['items', 'item']],
    multipleSeparator: ', ',
    selectAllText: 'Вибрати все',
    deselectAllText: 'Скасувати вибір усі'
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-ua_UA.js.map