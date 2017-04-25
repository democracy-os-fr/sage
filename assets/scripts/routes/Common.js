export default {
  init() {
    // JavaScript to be fired on all pages
    // console.log('JS sage :: routes/common :: init');
    $('.carousel').carousel({
        interval: 5000,
    })
    .on('slide.bs.carousel', function (e)
    {
        var nextH = $(e.relatedTarget).outerHeight();
        $(this).find('.active.item').parent().animate({ height: nextH }, 500);
    });
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    // console.log('JS sage :: routes/common :: finalize');
  },
};
