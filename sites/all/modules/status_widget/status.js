(function ($) {
  Drupal.behaviors.adminStatus = {
    attach: function (context, settings) {
      $(document).ready(function () {
        var $dateField = $('.form-item-status-date-date input');


        //console.log($('input[name="statuses[2]"]:checked').val());

        editData = {};
        $dateField.change(function(){
          $.get('/admin/status/get', {date: $(this).val()}, function(response) {
            editData = response;
            fillStatusForm(editData);
          }, 'json');
        });


        $('.make-all-the-same').click(function(){
          var statusIdx = parseInt($(this).data('status'));
          console.log(statusIdx);
          makeAllTheSame(statusIdx);
        });
        /*
         data
         :
         "{"1":"0","2":"0","3":"0","4":"0","5":"0","6":"0","7":"0","8":"0"}"
         date
         :
         "2016-04-20"
         id
         :
         "527"

         */
        //make all system access icons green
        //jQuery("td:contains('System Access')").parent().find('.issue').addClass('ok').removeClass('issue');
      });

      function fillStatusForm(obj) {
        var data = $.parseJSON(obj.data);
        for(var i in data) {
          $('input[name="statuses[' + i + ']"][value=' + data[i] + ']').attr('checked', 'checked');
        }
      }

      function makeAllTheSame(idx) {
        for(var i = 1; i <= 8; i++) {
          $('#edit-statuses-' + i + '-' + idx).click();
        }
      }
    }
  }
})(jQuery);
