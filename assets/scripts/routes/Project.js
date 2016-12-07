export default {
  init() {
    console.log('JS sage :: routes/project :: init');
    // jQuery.blueimp.Gallery(
    //   document.getElementById('project-images').getElementsByTagName('a'), {
    //     container: '#project-gallery',
    //     carousel: true,
    //   }
    // );
    /* eslint-disable */
    // document.getElementById('links').onclick = function (event) {
    //   console.log('click');
    //   event = event || window.event;
    //   var target = event.target || event.srcElement,
    //     link = target.src ? target.parentNode : target,
    //     options = {
    //       index: link,
    //       event: event
    //     },
    //     links = this.getElementsByTagName('a');
    //   window.blueimp.Gallery(links, options);
    //   };
    /* eslint-enable */
    $('#project-gallery').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '#project-gallery-nav',
    });
    $('#project-gallery-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '#project-gallery',
      dots: true,
      focusOnSelect: true,
    });
    // $('.page-node-type-project .leaflet-container').click(function () {
    //   console.log('CLICK that bitch');
    //   $(this).css('pointer-events', 'auto');
    // }).mouseleave(function () {
    //   console.log('mouse leave');
    //   $(this).css('pointer-events', 'none');
    // });
  },
};
