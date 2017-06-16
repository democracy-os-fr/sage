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
 * @BootstrapPreprocess("page")
 */
class Page extends \Drupal\bootstrap\Plugin\Preprocess\Page {

  // It should be noted that you do not need all three methods here.
  // This is to just show you the different examples of how this plugin
  // works and how they can be tailored to your needs.

  /**
   * {@inheritdoc}
   */
  public function preprocess(array &$variables, $hook, array $info) {
    // $value = isset($variables['element']['child']['#value']) ? $variables['element']['child']['#value'] : FALSE;
    // if (_some_module_condition($value)) {
    //   $variables['attributes']['class'][] = 'my-theme-class';
    //   $variables['attributes']['class'][] = 'another-theme-class';
    //   $key = array_search('page', $variables['attributes']['class']);
    //   if ($key !== FALSE) {
    //     unset($variables['attributes']['class'][$key]);
    //   }
    // }

    // If you are extending and overriding a preprocess method from the base
    // theme, it is imperative that you also call the parent (base theme) method
    // at some point in the process, typically after you have finished with your
    // preprocessing.
    parent::preprocess($variables, $hook, $info);
  }

  /**
   * {@inheritdoc}
   */
  public function preprocessVariables(Variables $variables) {
    // This method is almost identical to the one above, but it introduces the
    // Variables utility class in the base theme. This class has a plethora of
    // helpful methods to quickly modify common tasks when you're in a
    // preprocess function. It also acts like the normal $variables array when
    // you need it to in instances of accessing nested content or in loop
    // structures like foreach.
    // $value = isset($variables['element']['child']['#value']) ? $variables['element']['child']['#value'] : FALSE;
    // if (_some_module_condition($value)) {
    //   $variables->addClass(['my-theme-class', 'another-theme-class'])->removeClass('page');
    // }
    parent::preprocessVariables($variables);
  }

  /**
   * {@inheritdoc}
   */
  protected function preprocessElement(Element $element, Variables $variables) {
    // This method is only ever invoked if either $variables['element'] or
    // $variables['elements'] exists. These keys are usually only found in forms
    // or render arrays when there is a #type being used. This introduces the
    // Element utility class in the base theme. It too has a bucket-load of
    // features, specific to the unique characteristics of render arrays with
    // their "properties" (keys starting with #). This will quickly allow you to
    // access some of the nested element data and reduce the overhead required
    // for commonly used logic.
    // $value = $element->child->getProperty('value', FALSE);
    // if (_some_module_condition($value)) {
    //   $variables->addClass(['my-theme-class', 'another-theme-class'])->removeClass('page');
    // }
    parent::preprocessElement($element, $variables);
  }

}
