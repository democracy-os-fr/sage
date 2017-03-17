/*eslint no-unused-vars: "off"*/
/* global Drupal drupalSettings */
(function ($) {
  'use strict';
  console.log('JAVASCRIPT views exposed form'); // eslint-disable-line no-console

  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {
      console.log('JAVASCRIPT exposedfilter_buttons'); // eslint-disable-line no-console
      $('.views-exposed-form label.filter-sort').on('click', (e) => {
        // console.dir(e); // eslint-disable-line no-console
        var state = $(e.currentTarget).attr('data-filter-toggle');
        if( state == 'on' ) {
          $(e.currentTarget).find('.filter-sort-order').toggleClass('toggle-active');
        } else {
          $('.views-exposed-form label.filter-sort').attr('data-filter-toggle', 'off');
          $(e.currentTarget).attr('data-filter-toggle', 'on');
        }

        // Update hidden field
        // console.dir(context); // eslint-disable-line no-console
        console.dir(e.currentTarget.form); // eslint-disable-line no-console
        var sortBy = $(e.currentTarget).attr('data-filter-sort') ;
        var sortOrder = $(e.currentTarget).find('span.filter-sort-order.toggle-active').attr('data-filter-sort') ;
        console.dir(sortBy); // eslint-disable-line no-console
        console.dir(sortOrder); // eslint-disable-line no-console

        $(e.currentTarget.form).find('input[name="sort_by"]').val(sortBy);
        $(e.currentTarget.form).find('input[name="sort_order"]').val(sortOrder);

      });
    },
  };

})(jQuery);
