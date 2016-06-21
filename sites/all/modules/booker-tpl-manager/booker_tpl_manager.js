(function ($) {

Drupal.behaviors.bookrtTplMangerFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.tpl_manager_tab', context).drupalSetSummary(function (context) {
      var tplName = $('.form-item-tpl select').val();
      var contTypeTpl = $('.form-item-parent-tpl input[type="checkbox"]').attr('checked');

      if (contTypeTpl) {
        return Drupal.t('Content Type default');
      } else {
        if (tplName != 0) {
          return Drupal.t('Template: @tplName', { '@tplName': tplName });
        }
        else {
          return Drupal.t('Drupal default');
        }
      }
    });
  }
};

})(jQuery);