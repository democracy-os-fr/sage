<?php
/**
 * @file
 * Contains \Drupal\bootstrap\Plugin\Process\ManagedFile.
 */

namespace Drupal\sage\Plugin\Process;

use Drupal\bootstrap\Annotation\BootstrapProcess;
use Drupal\bootstrap\Utility\Element;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap\Plugin\Process\ProcessBase;
use Drupal\bootstrap\Plugin\Process\ProcessInterface;
/**
 * Processes the "managed_file" element.
 *
 * @ingroup plugins_process
 *
 * @BootstrapProcess("managed_file")
 */
class ManagedFile extends ProcessBase implements ProcessInterface {

  public static function processManagedFile(&$element, FormStateInterface $form_state, &$complete_form) {
    $element['remove_button']['#weight'] = 0;
  }

}
