var myData = [{ title: "Title", description: "<p>Lorem Ipsum</p>" }];

var App = Ember.Application.create({
	rootElement: "#app"
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
