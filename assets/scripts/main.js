/** import external dependencies */
import 'jquery';
import 'bootstrap-sass/assets/javascripts/bootstrap';
import 'slick-carousel/slick/slick.min.js';

// import local dependencies
import Router from './util/router';
import common from './routes/Common';
import pathFrontpage from './routes/Home';
import aboutUs from './routes/About';
import pageNodeTypeCampaign from './routes/Campaign';
import pageNodeTypeProject from './routes/Project';
import pathCarte from './routes/LeafletSidebar';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  /** All pages */
  common,
  /** Home page */
  pathFrontpage,
  /** About Us page, note the change from about-us to aboutUs. */
  aboutUs,
  pageNodeTypeCampaign,
  pageNodeTypeProject,
  pathCarte,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
