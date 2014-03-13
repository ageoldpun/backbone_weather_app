define(function (require) {
  var Backbone = require('backbone');

  var Router = Backbone.Router.extend({
    initialize: function (options) {
      this.currentWeatherView = options.current;
      this.forecastView = options.forecast;
    },

    routes: {
      'current': 'displayCurrentWeather',
      'forecast': 'displayForecast'
    },

    displayCurrentWeather: function () {
      this.forecastView.$el.hide();
      this.currentWeatherView.$el.show();
    },

    displayForecast: function () {
      this.currentWeatherView.$el.hide();
      this.forecastView.$el.show();
    }

  });

  return Router;
})