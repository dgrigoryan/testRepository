(function ($) {

Drupal.behaviors.bookrtTplMangerContentTypeSummaries = {
  attach: function (context) {
    $('fieldset.tpl_manager_tab', context).drupalSetSummary(function (context) {
      var tplName = $('.form-item-tpl select').val();
      if (tplName != 0) {
        return Drupal.t('Template: @tplName', { '@tplName': tplName });
      }
      else {
        return Drupal.t('Drupal default');
      }
    });
  }
};

})(jQuery);