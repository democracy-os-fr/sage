<?php

/**
 * @file
 * Contains \Drupal\agora\Plugin\Form\ViewsExposedForm.
 */

namespace Drupal\sage\Plugin\Form;

use Drupal\bootstrap\Annotation\BootstrapForm;
use Drupal\bootstrap\Utility\Element;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Component\Utility\SafeMarkup;
/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @ingroup plugins_form
 *
 * @BootstrapForm("views_exposed_form")
 */
class ViewsExposedForm extends \Drupal\bootstrap\Plugin\Form\FormBase {

  /**
   * {@inheritdoc}
   */
  public function alterForm(array &$form, FormStateInterface $form_state, $form_id = NULL) {
    dcp("ViewsExposedForm alterForm");
    dcp($form);
    //array_push($form['#attributes']['class'],'form-horizontal');

    foreach ($form['#info'] as $key => $info) {
      if( preg_match('#^filter-#', $key) ) {
        dcp('found filter');
        dcp($form[$info['value']]);
        if ( $form[$info['value']]['#type'] == 'select' ) {

          foreach ($form[$info['value']]['#options'] as $opt_key => $opt_value) {
            $form[$info['value']]['#options'][$opt_key] = SafeMarkup::checkPlain($opt_value);
          }
          if( $form[$info['value']]['#multiple'] ) {
            $form[$info['value']]['#type'] = 'checkboxes';
          } else {
            $form[$info['value']]['#type'] = 'radios';
          }
          $form[$info['value']]['#sage'] = 'filter_dropdown';

        } elseif ( $form[$info['value']]['#type'] == 'textfield' ) {
          $form[$info['value']]['#sage'] = 'filter_search';
          $form[$info['value']]['#placeholder'] = 'Rechercher';
        }

      }
    }

    if( isset($form['sort_by']) && $form['sort_by']['#type'] == 'select' ) {
      // $form['sort_by']['#sage'] = 'filter_sort';
      if( isset($form['sort_order']) && $form['sort_order']['#type'] == 'select' ) {
        // $form['sort_order']['#sage'] = 'filter_sort';
        $form ['#sage'] = 'filter_sort';
      }
    }

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
