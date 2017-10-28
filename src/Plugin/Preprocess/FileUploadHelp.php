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
 * Pre-processes variables for the "file_upload_help" theme hook.
 *
 * @ingroup plugins_preprocess
 *
 * @BootstrapPreprocess("file_upload_help")
 * )
 */
class FileUploadHelp extends \Drupal\bootstrap\Plugin\Preprocess\FileUploadHelp {

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    parent::preprocessVariables($variables);
    if (!empty($variables['popover'])) {
      $variables['popover']['toggle']['#title'] = '';
      $variables['popover']['toggle']['#icon'] = '<i class="fa fa-lg fa-question"></i>';
      $variables['popover']['toggle']['#attributes']['class'] = ['btn','btn-info'];
      $variables['popover']['toggle']['#attributes']['data-placement'] = 'right';
    }

  }
}
