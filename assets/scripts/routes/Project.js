/* global drupalSettings */

export default {
  init() {
    // console.log('JS sage :: routes/project :: init');

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

    $('#nav-project a[href="#tab-project-main"]').on('shown.bs.tab', () => {
      if (drupalSettings.leaflet['leaflet-map']) {
        if (Array.isArray(drupalSettings.leaflet['leaflet-map'])) {
          drupalSettings.leaflet['leaflet-map'][0].lMap.invalidateSize(false);
        } else {
          drupalSettings.leaflet['leaflet-map'].lMap.invalidateSize(false);
        }
      }
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

    $('.btn-back-to-list').click( () => {
        // window.history.back();
    });

  },
};
