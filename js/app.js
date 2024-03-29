define(function (require) {
  var $ = require('jquery');
  var WeatherConditions = require('models/weather-conditions');
  var Forecast = require('collections/forecast');
  var CurrentWeatherView = require('views/current-weather');
  var ForecastView = require('views/forecast');
  var Router = require('router');
  var app = {};

  var latLong = "45.5330,-122.6894";
  var apiKey = "accc92eb275ed07d3e4b606d113feefe";
  var url = 'https://api.forecast.io/forecast'

  $.getJSON(url + '/' + apiKey + '/' + latLong + '?callback=?')
   .done(main)
   .fail(function () {
   });

  function main (data) {
    
    $('#loading-message').text('Your weather is now!');

    var currentWeatherModel = new WeatherConditions(data.currently);
    var dailyForecastCollection = new Forecast(data.daily.data);

    var currentWeatherView = new CurrentWeatherView({model: currentWeatherModel});
    var forecastView = new ForecastView({collection: dailyForecastCollection})

    var router = new Router({
      current: currentWeatherView,
      forecast: forecastView
    });

    Backbone.history.start();

    app.current = currentWeatherModel;
    app.forecast = dailyForecastCollection;
  }

  window.app = app;

});
