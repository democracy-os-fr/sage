export default {
  init() {
    // JavaScript to be fired on the home page

    function isEmpty( el ){
      return !$.trim( el.html());
    }

    let news = $('#newsstand');
    let events = news.find('.view-id-next_events.view-display-id-home') ;

    if( isEmpty(events) ){
      // console.log('empty !!'); // eslint-disable-line no-console
      news.children().first().remove();
      news.children().addClass('col-md-6 col-lg-6');
    } else {
      news.children().addClass('col-md-4 col-lg-4');
    }

  },
};
