<?php
/**
 * @file
 * Contains \Drupal\sage\Plugin\Preprocess\Page.
 */

namespace Drupal\sage\Plugin\Preprocess;

use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;

/**
 * Pre-processes variables for the "page" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("links")
 */
class Links extends \Drupal\bootstrap\Plugin\Preprocess\Links {

  /**
   * {@inheritdoc}
   */
  public function preprocess(array &$variables, $hook, array $info) {
    if('links__language_block' === $variables['theme_hook_original']){
      $variables['attributes']['class'][] = 'dropdown-menu';
      $variables['attributes']['role'][] = 'menu';
    }
    parent::preprocess($variables, $hook, $info);
  }


}
