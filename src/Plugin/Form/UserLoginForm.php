<?php

/**
 * @file
 * Contains \Drupal\agora\Plugin\Form\UserLoginForm.
 */

namespace Drupal\agora\Plugin\Form;

use Drupal\bootstrap\Annotation\BootstrapForm;
use Drupal\bootstrap\Utility\Element;
use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @ingroup plugins_form
 *
 * @BootstrapForm("user_login_form")
 */
class UserLoginForm extends \Drupal\bootstrap\Plugin\Form\FormBase {

  /**
   * {@inheritdoc}
   */
  public function alterForm(array &$form, FormStateInterface $form_state, $form_id = NULL) {
    //dcp($form);
    //array_push($form['#attributes']['class'],'form-horizontal');
  }

  /**
   * {@inheritdoc}
   */
  public static function submitForm(array &$form, FormStateInterface $form_state) {
    // This method is automatically called when the form is submitted.
  }

  /**
   * {@inheritdoc}
   */
  public static function validateForm(array &$form, FormStateInterface $form_state) {
    // This method is automatically called when the form is validated.
  }

}
