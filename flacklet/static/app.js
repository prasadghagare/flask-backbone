'use strict';

var app =app || {};

$(function(){
  app.loginFormView = new app.LoginFormView({});
  app.loginFormView.render();

  $('form[data-submit!=""]').submit(function(ev) {
    var form = $(ev.currentTarget);
    var target = app[form.data('submit')];
    var values = {};
    for (var i = 0; i < form.children().length; i++) {
        var control = form.children().eq(i);
        var name = control.attr('name') || control.attr('id');
        if (name) {
            values[name] = control.val();
            control.val('');
        }
    }
    console.log("triggering submit")
    target.trigger('submit', values);
    return false;
});
}

)
