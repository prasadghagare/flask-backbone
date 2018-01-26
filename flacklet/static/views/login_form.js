'use strict';
var app = app || {};

app.LoginFormView = Backbone.View.extend({
    el: "#login-form",
    template : _.template($('#login-form-template').html()),

    initialize : function(options){
      _.bindAll(this,'render','submit');
      this.on('submit',this.submit);
    },

    submit: function(args){
      console.log("submit triggerd")
      var user = new app.User({
        nickname : args.nickname
      });
      user.save()
    },

    render: function(){
      this.$el.html(this.template({}));
      this.$el.show();
    }
});
