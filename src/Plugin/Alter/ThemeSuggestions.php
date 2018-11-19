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
class ThemeSuggestions extends \Drupal\bootstrap\Plugin\Alter\ThemeSuggestions
{

  /**
   * {@inheritdoc}
   */
    public function alter(&$suggestions, &$variables = null, &$hook = null)
    {

    // DO NOT DUMP $variables for all hook (outside the switch block) => ERR_HEADER_TOO_BIG

        ////dcp($hook);

        parent::alter($suggestions, $variables, $hook);

        switch ($hook) {
      case 'image_style':
        if (isset($variables['style_name'])) {
            array_push($suggestions, 'image_style__'.$variables['style_name']);
        }
        break;


      case 'views_view':
        //dcp('views_view ThemeSuggestions');
        //dcp($suggestions);
        //dcp($variables['view']->id());
        //dcp($variables['view']->current_display);

        array_push($suggestions, implode('__', ['views_view',$variables['view']->id()]));
        array_push($suggestions, implode('__', ['views_view',$variables['view']->id(),$variables['view']->current_display]));

        break;

      case 'views_exposed_form':
        // //dcp('views_exposed_form ThemeSuggestions');
        // //dcp($suggestions);
        // //dcp($variables);

        array_push($suggestions, $variables['form']['#id']);

        if (isset($variables['form']['#sage'])) {
            $keys = ['filter_sort'];
            if (in_array($variables['form']['#sage'], $keys)) {
                array_push($suggestions, 'views_exposed_form__filter_sort');
            }
        }

        break;

      case 'form_element':
        // //dcp('form_element ThemeSuggestions');
        // //dcp($suggestions);
        // dcp($variables);

        if (isset($variables['element']['#sage'])) {
            $keys = ['filter_search'];
            if (in_array($variables['element']['#sage'], $keys)) {
                array_push($suggestions, 'form_element__filter_search');
            }
        }

        break;

      case 'form_element_label':
        // //dcp('form_element ThemeSuggestions');
        // //dcp($suggestions);
        //dcp($variables);

        if (isset($variables['element']['#id'])) {
            if (preg_match('#^edit-field-actor-type-value#', $variables['element']['#id'])) {
                //dcp('form_element ThemeSuggestions');
                array_push($suggestions, 'fieldset__filter_checkbox_block');
            }
        }

        break;

      case 'fieldset':
        // //dcp('fieldset ThemeSuggestions');
        // //dcp($suggestions);
        // //dcp($variables);

        if (isset($variables['element']['#sage'])) {
            $keys = ['filter_dropdown','filter_search'];
            if (in_array($variables['element']['#sage'], $keys)) {
                array_push($suggestions, 'fieldset__filter_dropdown');
            }
        }

        if( isset($variables['element']) && array_key_exists('#context',$variables['element'])  ){
          if( in_array('views_exposed_form', $variables['element']['#context']) ) {
            array_push($suggestions,'fieldset__dropdown');
          }
        }

        if (isset($variables['element']['#name'])) {
            $keys = ['type','field_actor_type_value','field_filter_availability_value','field_filter_rent_type_value'];
            if (in_array($variables['element']['#name'], $keys)) {
                //dcp($variables['element']);
                array_push($suggestions, 'fieldset__filter_dropdown_block');
            }
            $keys = ['type'];
            if (in_array($variables['element']['#name'], $keys)) {
                //dcp($variables['element']);
                array_push($suggestions, 'fieldset__filter_button_group');
            }
        }
        break;


      // case 'input':
      //   if( $variables['theme_hook_original'] == 'input__checkbox') {
      //     // dcp('input__checkbox ThemeSuggestions');
      //     if( isset($variables['element']['#parents']) ) {
      //       if( in_array('field_actor_type_value',$variables['element']['#parents']) ) {
      //         array_push($suggestions,'fieldset__filter_checkbox_block');
      //       }
      //     }
      //   }
      //   break;

      // case 'page':
      //   //dcp('page ThemeSuggestions');
      //   //dcp($suggestions);
      //   //dcp($variables);
      //   break;
      //
      // case 'node':
      //   //dcp($suggestions);
      //   //dcp($variables);
      //   break;

    }
    }
}
