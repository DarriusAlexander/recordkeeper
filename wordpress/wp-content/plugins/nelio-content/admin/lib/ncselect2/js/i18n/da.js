/*! Select2 4.0.1 | https://github.com/ncselect2/ncselect2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.ncselect2&&jQuery.fn.ncselect2.amd)var e=jQuery.fn.ncselect2.amd;return e.define("ncselect2/i18n/da",[],function(){return{errorLoading:function(){return"Resultaterne kunne ikke indlæses."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Angiv venligst "+t+" tegn mindre";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Angiv venligst "+t+" tegn mere";return n},loadingMore:function(){return"Indlæser flere resultater…"},maximumSelected:function(e){var t="Du kan kun vælge "+e.maximum+" emne";return e.maximum!=1&&(t+="r"),t},noResults:function(){return"Ingen resultater fundet"},searching:function(){return"Søger…"}}}),{define:e.define,require:e.require}})();