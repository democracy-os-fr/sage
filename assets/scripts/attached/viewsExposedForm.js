/*eslint no-unused-vars: "off"*/
/* global Drupal drupalSettings */

(function ($, Drupal) {

  'use strict';

  /**
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {
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
        // console.dir(e.currentTarget.form); // eslint-disable-line no-console
        var sortBy = $(e.currentTarget).attr('data-filter-sort') ;
        var sortOrder = $(e.currentTarget).find('span.filter-sort-order.toggle-active').attr('data-filter-sort') ;
        // console.dir(sortBy); // eslint-disable-line no-console
        // console.dir(sortOrder); // eslint-disable-line no-console

        $(e.currentTarget.form).find('input[name="sort_by"]').val(sortBy);
        $(e.currentTarget.form).find('input[name="sort_order"]').val(sortOrder);

      });
    },
  };

  /**
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.ViewsExposedForm = {
    attach: function (context) {

      // Flat mode
      // $('.views-exposed-form .js-form-type-checkbox input',context).once('ViewsExposedForm').iCheck({
      //   checkboxClass: 'icheckbox_flat-red',
      //   radioClass: 'iradio_flat-red',
      // });

      // Line mode

      var mapping = {
        '1': 'red',
        '2': 'blue',
        '3': 'yellow',
        '4': 'green',
        '5': 'grey',
        'shared': 'aero',
        'standalone': 'aero',
        'now': 'aero',
        'soon': 'aero',
        'tdb': 'aero',
        'acteur': 'grey',
        'arc_actor': 'grey',
        'arc_proposal': 'grey',
        'project': 'grey',
      };

      $('.views-exposed-form .js-form-type-checkbox input',context).once('ViewsExposedForm').each(function(){
        var self = $(this);
        var label = self.parent();
        var label_text = label.text();

        label.replaceWith(self);
        self.iCheck({
          checkboxClass: 'icheckbox_line-' + mapping[self.val()],
          radioClass: 'iradio_line-' + mapping[self.val()],
          uncheckedClass: 'pseudo-disabled',
          indeterminateClass: 'pseudo-disabled',
          insert: '<div class="icheck_line-icon"></div>' + label_text,
        })
      });

    },
  };

})(jQuery, Drupal);
