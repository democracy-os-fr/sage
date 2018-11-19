<?php
/**
 * @file
 * Contains \Drupal\sage\Sage.
 */

namespace Drupal\sage;

use Drupal\bootstrap\Bootstrap;
use Drupal\bootstrap\Utility\Element;
use Drupal\bootstrap\Utility\Unicode;

/**
 * The primary class for the Drupal Bootstrap base theme.
 *
 * Provides many helper methods.
 *
 * @ingroup utility
 */
class Sage extends Bootstrap {

  /**
   * Returns a specific Bootstrap Glyphicon.
   *
   * @param string $name
   *   The icon name, minus the "fa-" prefix.
   * @param array $default
   *   (Optional) The default render array to use if $name is not available.
   *
   * @return array
   *   The render containing the icon defined by $name, $default value if
   *   icon does not exist or returns NULL if no icon could be rendered.
   */
  public static function faicon($name, $bundle = false, $default = []) {
    $icon = [];

    if ($bundle) {
      $icon = [
        '#type' => 'icon',
        '#bundle' => 'fa',
        '#icon' => $name,
      ];
    }
    else {
      $icon = [
        // '#prefix' => '<span class="btn-label">',
        '#type' => 'html_tag',
        '#tag' => 'i',
        '#value' => '',
        '#attributes' => [
          'class' => ['faicon', $name, 'fa-fw'],
          'aria-hidden' => 'true',
        ],
        // '#suffix' => '</span>',
      ];
    }

    return $icon ?: $default;
  }

  /**
   * Matches a Bootstrap Glyphicon based on a string value.
   *
   * @param string $value
   *   The string to match against to determine the icon. Passed by reference
   *   in case it is a render array that needs to be rendered and typecast.
   * @param array $default
   *   The default render array to return if no match is found.
   *
   * @return string
   *   The Bootstrap icon matched against the value of $haystack or $default if
   *   no match could be made.
   */
  public static function faiconFromString(&$value, $bundle = false, $default = []) {
    static $lang;
    if (!isset($lang)) {
      $lang = \Drupal::languageManager()->getCurrentLanguage()->getId();
    }

    $theme = static::getTheme();
    $texts = $theme->getCache('faiconFromString', [$lang]);

    // Ensure it's a string value that was passed.
    $string = static::toString($value);
    if ($texts->isEmpty()) {
      $data = [
        // Text that match these specific strings are checked first.
        'matches' => [
          t('Administration')->render()     => 'cogs'
        ],

        // Text containing these words anywhere in the string are checked last.
        'contains' => [
          t('Manage')->render()     => 'fa fa-cog',
          t('Configure')->render()  => 'fa fa-cog',
          t('Settings')->render()   => 'fa fa-cog',
          t('Download')->render()   => 'fa fa-download',
          t('Export')->render()     => 'fa fa-export',
          t('Filter')->render()     => 'fa fa-filter',
          t('Import')->render()     => 'fa fa-import',
          t('Save')->render()       => 'fa fa-ok',
          t('Update')->render()     => 'fa fa-ok',
          t('Add')->render()        => 'fa fa-plus',
          t('Edit')->render()       => 'fa fa-pencil',
          t('Uninstall')->render()  => 'fa fa-trash',
          t('Install')->render()    => 'fa fa-plus',
          t('Write')->render()      => 'fa fa-plus',
          t('Cancel')->render()     => 'fa fa-remove',
          t('Delete')->render()     => 'fa fa-trash',
          t('Remove')->render()     => 'fa fa-trash',
          t('Search')->render()     => 'fa fa-search',
          t('Upload')->render()     => 'fa fa-upload',
          t('Preview')->render()    => 'fa fa-desktop',
          t('Devel')->render()    => 'fa fa-console',
          t('Log in')->render()     => 'fa fa-sign-in',
          t('Log out')->render()     => 'fa fa-sign-out',
          t('My account')->render()     => 'fa fa-info-circle',
          t('Administration')->render()     => 'fa fa-cogs',
          t('Actors')->render()     => 'far fa-user',
          t('Acteurs')->render()     => 'far fa-user',
          t('Type(s) d\'innovation')->render()     => 'fas fa-tags',
          t('type d\'innovation')->render()     => 'fas fa-tag  ',
          // t('Apply')->render()     => 'fas fa-sync-alt',
        ],
      ];
      $texts->setMultiple($data);
    }

    // Iterate over the array.
    foreach ($texts as $pattern => $strings) {
      foreach ($strings as $text => $icon) {
        switch ($pattern) {
          case 'matches':
            if ($string === $text) {
              return self::faicon($icon, $bundle, $default);
            }
            break;

          case 'contains':
            if (strpos(Unicode::strtolower($string), Unicode::strtolower($text)) !== FALSE) {
              return self::faicon($icon, $bundle, $default);
            }
            break;
        }
      }
    }

    // Return a default icon if nothing was matched.
    return $default;
  }

  /**
   * Adds an icon to button element based on its text value.
   *
   * @param array $icon
   *   An icon render array.
   *
   * @return $this
   *
   * @see \Drupal\bootstrap\Bootstrap::glyphicon()
   */
  public static function setIcon(Element &$element, array $icon = NULL) {
    if ($element->isButton() && !Bootstrap::getTheme()->getSetting('button_iconize')) {
      return  ;
    }
    if ($value = $element->getProperty('value', $element->getProperty('title'))) {
      $icon = isset($icon) ? $icon : self::faiconFromString($value);
      $element->setProperty('icon', $icon);
    }
    return $element;
  }

  public static function faicon_from_settings(array $values) {
    $icons = array();
    foreach ($values as $value) {
      $iconSettings = unserialize($value['settings']);
      // Format mask.
      $iconMask = '';
      if (!empty($iconSettings['masking']['mask'])) {
        $iconMask = $iconSettings['masking']['style'] . ' fa-' . $iconSettings['masking']['mask'];
      }
      unset($iconSettings['masking']);

      // Format power transforms.
      $iconTransforms = [];
      $powerTransforms = $iconSettings['power_transforms'];
      foreach ($powerTransforms as $transform) {
        if (!empty($transform['type'])) {
          $iconTransforms[] = $transform['type'] . '-' . $transform['value'];
        }
      }
      unset($iconSettings['power_transforms']);

      $icons[] = [
        '#theme' => 'fontawesomeicon',
        '#name' => 'fa-' . $value['icon_name'],
        '#style' => $value['style'],
        '#settings' => implode(' ', $iconSettings),
        '#transforms' => implode(' ', $iconTransforms),
        '#mask' => $iconMask,
      ];
    }

    return [
      '#theme' => 'fontawesomeicons',
      '#icons' => $icons,
      '#layers' => TRUE,
    ];

  }

}
