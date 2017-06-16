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

    ////dcp($hook);

    parent::alter($suggestions, $variables, $hook);

    switch ($hook) {
      case 'image_style':
        if( isset($variables['style_name']) ) {
          if(preg_match('#^media_#', $variables['style_name'])) {
            array_push($suggestions,'image_style__media');
          }
          array_push($suggestions,'image_style__'.$variables['style_name']);
        }
        break;


      case 'views_view':
        //dcp('views_view ThemeSuggestions');
        //dcp($suggestions);
        //dcp($variables['view']->id());
        //dcp($variables['view']->current_display);

        array_push($suggestions,implode('__',['views_view',$variables['view']->id()]));
        array_push($suggestions,implode('__',['views_view',$variables['view']->id(),$variables['view']->current_display]));

        break;

      case 'views_exposed_form':
        // //dcp('views_exposed_form ThemeSuggestions');
        // //dcp($suggestions);
        // //dcp($variables);

        if( isset($variables['form']['#sage']) ) {
          $keys = ['filter_sort'];
          if ( in_array($variables['form']['#sage'], $keys) ) {
            array_push($suggestions,'views_exposed_form__filter_sort');
          }
        }
        break;

      case 'form_element':
        // //dcp('form_element ThemeSuggestions');
        // //dcp($suggestions);
        // //dcp($variables);

        if( isset($variables['element']['#sage']) ) {
          $keys = ['filter_search'];
          if ( in_array($variables['element']['#sage'], $keys) ) {
            array_push($suggestions,'form_element__filter_search');
          }
        }
        break;

      case 'fieldset':
        // //dcp('fieldset ThemeSuggestions');
        // //dcp($suggestions);
        // //dcp($variables);

        if( isset($variables['element']['#sage']) ) {
          $keys = ['filter_dropdown','filter_search'];
          if ( in_array($variables['element']['#sage'], $keys) ) {
            array_push($suggestions,'fieldset__filter_dropdown');
          }
        }
        break;


      case 'page':
        dcp('page ThemeSuggestions');
        dcp($suggestions);
        dcp($variables);

        foreach ($suggestions as $key => $value) {
          if( preg_match('#^page__agora__page__[list|add|edit]#', $value) ){
            array_push($suggestions,'page__wrapper');
            break;
          }
        }

        break;

      // case 'node':
      //   //dcp($suggestions);
      //   //dcp($variables);
      //   break;
    }
  }

}
