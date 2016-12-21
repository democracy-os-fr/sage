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
    console.log('JS sage :: routes/project :: init');

    // $('#project-gallery').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   asNavFor: '#project-gallery-nav',
    // });
    // $('#project-gallery-nav').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   asNavFor: '#project-gallery',
    //   dots: true,
    //   focusOnSelect: true,
    // });

    $('#nav-project a[href="#tab-project-form"]').on('show.bs.tab', () => {
      window.location.hash = '#candidature';
      const action = $('form.webform-submission-form').attr('action').split('#')[0];
      $('form.webform-submission-form').attr('action', action + window.location.hash);
    }).on('hide.bs.tab', () => {
      window.location.hash = '';
    });

    if (window.location.hash) {
      switch (window.location.hash) {
        case '#candidature':
          $('#nav-project a[href="#tab-project-form"]').tab('show');
          break;
        default:
      }
    } else {
      $('#nav-project a[href="#tab-project-main"]').tab('show');
    }

    // Only in edit mode
    if (endsWith(drupalSettings.path.currentPath, 'edit')) {
      $('#node-project-edit-form a[href="#edit-group-form"]').on('show.bs.tab', () => {
        const cm = getCodeMirror('#edit-field-form-0-default-data');
        cm.refresh();
      });
    }
  },
};
