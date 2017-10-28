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
    // JavaScript to be fired on all pages
    // console.log('JS sage :: routes/common :: init');  // eslint-disable-line no-console
    $('.carousel').carousel({
        interval: 5000,
    })
    .on('slide.bs.carousel', function (e)
    {
        var nextH = $(e.relatedTarget).outerHeight();
        $(this).find('.active.item').parent().animate({ height: nextH }, 500);
    });

    // console.log(drupalSettings.path.currentPath); // eslint-disable-line no-console

    if (endsWith(drupalSettings.path.currentPath, 'add/project') || endsWith(drupalSettings.path.currentPath, 'edit') ) {
      $('.path-node .node-form a[href="#edit-group-form"]').on('show.bs.tab', () => {
        const cm = getCodeMirror('#edit-field-form-0-settings-default-data');
        cm.refresh();
      });
      $('.path-node .node-form a[href="#edit-group-forum"]').on('show.bs.tab', () => {
        const cm = getCodeMirror('#edit-field-form-comment-0-settings-default-data');
        cm.refresh();
      });
    }

    $(function () {
      $('[data-toggle="popover"]').popover({})
    })

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    // console.log('JS sage :: routes/common :: finalize'); // eslint-disable-line no-console
    if ($.isFunction($.fn.iCheck)) {
      $('.form-managed-file .form-type-checkbox input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_flat-red',
      });
      $(document).ajaxComplete(function(){
        $('.form-managed-file .form-type-checkbox input[type="checkbox"]').iCheck({
          checkboxClass: 'icheckbox_flat-red',
        });
      });
    }

  },
};
