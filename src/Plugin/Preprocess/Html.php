<?php
/**
 * @file
 * Contains \Drupal\bootstrap\Plugin\Preprocess\Links.
 */

namespace Drupal\sage\Plugin\Preprocess;

use Drupal\bootstrap\Plugin\Preprocess\PreprocessBase;
use Drupal\bootstrap\Plugin\Preprocess\PreprocessInterface;
use Drupal\bootstrap\Annotation\BootstrapPreprocess;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Variables;
use Drupal\Core\Template\Attribute;

/**
 * Pre-processes variables for the "links" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("html")
 */
class Html extends PreprocessBase implements PreprocessInterface {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {

    $body_attributes = isset($variables['attributes']) ? $variables['attributes'] : new Attribute();
    if(is_array($body_attributes)) {
      $body_attributes = new Attribute($body_attributes) ;
    }

    if( isset($variables['theme']) && $variables['theme']['name'] === 'sage' ){
      $body_attributes->addClass('sage');
    }

    if( isset($variables['root_path']) ){
      switch ($variables['root_path']) {
        case 'entity-browser':
          $body_attributes->addClass('entity-browser');
          break;
      }
    }

    $variables['attributes'] = $body_attributes;
    return $variables;
  }

}
