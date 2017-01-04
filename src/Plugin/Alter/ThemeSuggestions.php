<?php
/**
 * @file
 * Contains \Drupal\bootstrap\Plugin\Alter\ThemeSuggestions.
 */

namespace Drupal\sage\Plugin\Alter;

use Drupal\bootstrap\Annotation\BootstrapAlter;
use Drupal\bootstrap\Plugin\PluginBase;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Unicode;

/**
 * Implements hook_theme_suggestions_alter().
 *
 * @ingroup plugins_alter
 *
 * @BootstrapAlter("theme_suggestions")
 */
class ThemeSuggestions extends \Drupal\bootstrap\Plugin\Alter\ThemeSuggestions{

  /**
   * {@inheritdoc}
   */
  public function alter(&$suggestions, &$variables = NULL, &$hook = NULL) {

    // DO NOT DUMP $variables for all hook (outside the switch block) => ERR_HEADER_TOO_BIG

    // dcp($hook);

    parent::alter($suggestions, $variables, $hook);

    switch ($hook) {
      case 'image_style':
        if( isset($variables['style_name']) ) {
          array_push($suggestions,'image_style__'.$variables['style_name']);
        }
        break;

      // case 'page':
      //   dcp('page ThemeSuggestions');
      //   dcp($suggestions);
      //   dcp($variables);
      //   break;
      //
      // case 'node':
      //   dcp($suggestions);
      //   dcp($variables);
      //   break;

    }
  }

}
