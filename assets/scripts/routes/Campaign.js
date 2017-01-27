/* global drupalSettings */
import endsWith from 'mout/string/endsWith';

function getCodeMirror(target) {
  let $target = target instanceof jQuery ? target : $(target);
  if ($target.length === 0) {
    throw new Error('Element does not reference a CodeMirror instance.');
  }

  if (!$target.hasClass('CodeMirror')) {
    if ($target.is('textarea')) {
      $target = $target.next('.CodeMirror');
    }
  }

  return $target.get(0).CodeMirror;
}

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

    // $('#nav-campaign a[href="#forum"]').on('show.bs.tab', () => {
    //   window.location.hash = '#forum';
    //   const action = $('form.webform-submission-form').attr('action').split('#')[0];
    //   $('form.webform-submission-form').attr('action', action + window.location.hash);
    // }).on('hide.bs.tab', () => {
    //   window.location.hash = '';
    // });
    //
    // $('#nav-campaign a[href="#forum"]').on('shown.bs.tab', () => {
    //   if (drupalSettings.leaflet && drupalSettings.leaflet['leaflet-map']) {
    //     if (Array.isArray(drupalSettings.leaflet['leaflet-map'])) {
    //       drupalSettings.leaflet['leaflet-map'][0].lMap.invalidateSize(false);
    //     } else {
    //       drupalSettings.leaflet['leaflet-map'].lMap.invalidateSize(false);
    //     }
    //   }
    // });

    $('#nav-campaign a[href="#info"]').on('shown.bs.tab', () => {

    });


    $('#nav-campaign a[href="#agenda"]').on('show.bs.tab', () => {
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

    $('#nav-campaign a[href="#agenda"]').on('shown.bs.tab', () => {
      jQuery.cachedScript('//openagenda.com/js/embed/cibulSearchWidget.js');
      jQuery.cachedScript('//openagenda.com/js/embed/cibulCategoriesWidget.js');
      jQuery.cachedScript('//openagenda.com/js/embed/cibulBodyWidget.js');
      jQuery.cachedScript('//openagenda.com/js/embed/cibulCalendarWidget.js');
      jQuery.cachedScript('//openagenda.com/js/embed/cibulMapWidget.js');
    });


    if (window.location.hash) {
      switch (window.location.hash) {
        case '#forum':
          $('#nav-campaign a[href="#forum"]').tab('show');
          break;
        case '#agenda':
          $('#nav-campaign a[href="#agenda"]').tab('show');
          break;
        default:
      }
    } else {
      $('#nav-campaign a[href="#info"]').tab('show');
    }

    // Only in edit mode
    if (endsWith(drupalSettings.path.currentPath, 'edit')) {
      $('#node-campaign-edit-form a[href="#edit-group-form"]').on('show.bs.tab', () => {
        const cm = getCodeMirror('#edit-field-form-0-default-data');
        cm.refresh();
      });
    }

    $(window).load(() => {
      // console.log('campaign init window load');
      const search = jQuery('.cibulSearch');
      search.append('<button role="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>');
    });

    // console.log('campaign init end');
  },
};
