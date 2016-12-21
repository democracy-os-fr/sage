export default {
  init() {
    // console.log('campaign init');

    jQuery.cachedScript = (url, options) => {
      // Allow user to set any option except for dataType, cache, and url
      const result = jQuery.extend(options || {}, {
        dataType: 'script',
        cache: true,
        url,
      });

      // Use $.ajax() since it is more flexible than $.getScript
      // Return the jqXHR object so we can chain callbacks
      return jQuery.ajax(result);
    };

    jQuery(document).ready(() => {
      jQuery('a[data-toggle="tab"][href="#agenda"]').on('show.bs.tab', () => {
        function getQueryString() {
          const ret = {};
          if (window.location.search) {
            const parts = (document.location.toString().split('?')[1]).split('&');
            for (let i = 0; i < parts.length; i += 1) {
              const p = parts[i].split('=');
              // so strings will be correctly parsed:
              p[1] = decodeURIComponent(p[1].replace(/\+/g, ' '));

              if (p[0].search(/\[]/) >= 0) { // then it's an array
                p[0] = p[0].replace('[]', '');

                if (typeof ret[p[0]] !== 'object') ret[p[0]] = [];
                ret[p[0]].push(p[1]);
              } else {
                ret[p[0]] = p[1];
              }
            }
          }
          return ret;
        }

        if (!(window.location.search) && !(getQueryString()['oaq%5Bcategory%5D'])) {
          // const newLoc = `${window.location.href}${window.location.search ? '&'
          // : '?'}oaq%5Bcategory%5D=<?php print $categorySlug ; ?>`;
          // window.history.replaceState({}, document.title, newLoc);
        }
      });

      jQuery('a[data-toggle="tab"][href="#agenda"]').on('shown.bs.tab', () => {
        jQuery.cachedScript('//openagenda.com/js/embed/cibulSearchWidget.js');
        jQuery.cachedScript('//openagenda.com/js/embed/cibulCategoriesWidget.js');
        jQuery.cachedScript('//openagenda.com/js/embed/cibulBodyWidget.js');
        jQuery.cachedScript('//openagenda.com/js/embed/cibulCalendarWidget.js');
        jQuery.cachedScript('//openagenda.com/js/embed/cibulMapWidget.js');
      });
    });
    jQuery(window).load(() => {
      // console.log('campaign init window load');
      const search = jQuery('.cibulSearch');
      search.append('<button role="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>');
    });

    // console.log('campaign init end');
  },
};
