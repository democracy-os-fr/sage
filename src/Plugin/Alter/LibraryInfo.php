<?php
/**
 * @file
 * Contains \Drupal\bootstrap\Plugin\Alter\LibraryInfo.
 */

namespace Drupal\sage\Plugin\Alter;

use Drupal\bootstrap\Annotation\BootstrapAlter;
use Drupal\bootstrap\Bootstrap;
use Drupal\bootstrap\Plugin\PluginBase;
use Drupal\Component\Utility\NestedArray;

/**
 * Implements hook_library_info_alter().
 *
 * @ingroup plugins_alter
 *
 * @BootstrapAlter("library_info")
 */
class LibraryInfo extends \Drupal\bootstrap\Plugin\Alter\LibraryInfo {

  /**
   * {@inheritdoc}
   */
  public function alter(&$libraries, &$extension = NULL, &$context2 = NULL) {
    parent::alter($libraries, $extension, $context2);

    if ($extension === 'entity_browser') {
      // Replace core dialog/jQuery UI implementations with Bootstrap Modals.
      // if ($this->theme->getSetting('modal_enabled')) {
        $libraries['tabs']['override'] = 'sage/entity_browser.tabs';
      // }
    } elseif ($extension === 'entity_embed') {
      $libraries['drupal.entity_embed.dialog']['override'] = 'sage/drupal.entity_embed.dialog';
    }

  }

}
