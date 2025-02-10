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
    noneSelectedText: 'Izaberite',
    noneResultsText: 'Nema rezultata za {0}',
    countSelectedText: function (numSelected, numTotal) {
      return (numSelected == 1) ? '{0} izabrana' : '{0} izabrane';
    },
    maxOptionsText: function (numAll, numGroup) {
      return [
        (numAll == 1) ? 'Limit je dostignut ({n} stvar maximalno)' : 'Limit je dostignut ({n} stavke maksimalno)',
        (numGroup == 1) ? 'Grupni limit je dostignut ({n} stvar maksimalno)' : 'Grupni limit je dostignut ({n} stavke maksimalno)'
      ];
    },
    selectAllText: 'Izaberi sve',
    deselectAllText: 'Obrisi sve',
    multipleSeparator: ', '
  };
})(jQuery);


}));
//# sourceMappingURL=defaults-sr_SP.js.map