// import { pluck } from 'mout/array' ;

export default {
  init() {
    // JavaScript to be fired on the leaflet-sidebar page
    console.log('-- init leaflet-sidebar JS --'); // eslint-disable-line no-console

    // const markerCluster = drupalSettings.leaflet['leaflet-map'].lMap.markerCluster ;
    // console.log(markerCluster); // eslint-disable-line no-console
    // console.log(markerCluster.getChildCount()); // eslint-disable-line no-console
    // console.log(markerCluster.getAllChildMarkers()); // eslint-disable-line no-console

    // $('.view-map .sidebar-content .view-list article.list').each((i,item) => {
    //   console.log($(item).data('id')); // eslint-disable-line no-console
    //   console.log(markerCluster.getLayer($(item).data('id'))); // eslint-disable-line no-console
    //
    // })

    // markerCluster.eachLayer((layer) => {
    //   // console.log(layer); // eslint-disable-line no-console
    //   var visibleOne = markerCluster.getVisibleParent(layer);
    //   // console.log(visibleOne); // eslint-disable-line no-console
    //   let ids = []
    //   if(visibleOne._leaflet_type === 'point') {
    //     // console.log('point'); // eslint-disable-line no-console
    //     // console.log(visibleOne._leaflet_id); // eslint-disable-line no-console
    //     ids = [visibleOne._leaflet_id]
    //   } else {
    //     // console.log(layer); // eslint-disable-line no-console
    //     // console.log(visibleOne); // eslint-disable-line no-console
    //     // console.log(visibleOne.getChildCount()); // eslint-disable-line no-console
    //     // console.log(pluck(visibleOne.getAllChildMarkers(),'_leaflet_id')); // eslint-disable-line no-console
    //     ids = pluck(visibleOne.getAllChildMarkers(),'_leaflet_id')
    //   }
    //
    //   ids.map((id) => {
    //     console.log(id); // eslint-disable-line no-console
    //     var marker = visibleOne._icon ;
    //     $(`.view-map .sidebar-content .view-list article.list[data-id="${id}"]`).click(() => {
    //       console.log('marker-active'); // eslint-disable-line no-console
    //       //$('.marker-active').removeClass('marker-active');
    //       // $(marker).addClass('marker-active');
    //     });
    //   });
    //
    //
    // });

  },
};
