<?php
/**
 * @file
 * Contains \Drupal\sage\Sage.
 */

namespace Drupal\sage;

use Drupal\bootstrap\Bootstrap;
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
        '#type' => 'html_tag',
        '#tag' => 'span',
        '#prefix' => '<span class="btn-label">',
        '#suffix' => '</span>',
        '#value' => '',
        '#attributes' => [
          'class' => ['icon', 'fa', 'fa-fw', 'fa-' . $name],
          'aria-hidden' => 'true',
        ],
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
          t('Manage')->render()     => 'cog',
          t('Configure')->render()  => 'cog',
          t('Settings')->render()   => 'cog',
          t('Download')->render()   => 'download',
          t('Export')->render()     => 'export',
          t('Filter')->render()     => 'filter',
          t('Import')->render()     => 'import',
          t('Save')->render()       => 'ok',
          t('Update')->render()     => 'ok',
          t('Add')->render()        => 'plus',
          t('Edit')->render()       => 'pencil',
          t('Uninstall')->render()  => 'trash',
          t('Install')->render()    => 'plus',
          t('Write')->render()      => 'plus',
          t('Cancel')->render()     => 'remove',
          t('Delete')->render()     => 'trash',
          t('Remove')->render()     => 'trash',
          t('Search')->render()     => 'search',
          t('Upload')->render()     => 'upload',
          t('Preview')->render()    => 'desktop',
          t('Devel')->render()    => 'console',
          t('Log in')->render()     => 'sign-in',
          t('Log out')->render()     => 'sign-out',
          t('My account')->render()     => 'info-circle',
          t('Administration')->render()     => 'cogs',
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

}
