var myData = [{ title: "Title", description: "<p>Lorem Ipsum</p>" }];

//Ember.LOG_BINDINGS = true;			// log binding activities

var App = Ember.Application.create({
//	LOG_ACTIVE_GENERATION: true,		// log when Ember generates a controller or a route from a generic class
//	LOG_VIEW_LOOKUPS: true, 			// log when Ember looks up a template or a view
	rootElement: "#app"					// where to render the application (a )
});

App.Router.map(function() {
	this.resource('about', function () {
		this.route('history');
		this.route('company');
		this.route('team');
	});
	this.resource('contact_us');
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return myData[0];
	}
});

App.AboutHistoryRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('template1');
	}
});

App.AboutCompanyRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('template2');
	}
});

App.AboutTeamRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('template1');
	}
});

App.ContactUsRoute = Ember.Route.extend({
	renderTemplate: function() {
		this.render('template1');
	}
});