/*global Backbone*/
//fancy comment for eslnt to let it know Backbone is a global variable
//need to figure out how to get the config file to work

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title' and 'completed attributes.'

app.Todo = Backbone.Model.extend({

	//default atteibutes ensure each todo created has 'title' and 'completed' keys
	defaults: {
		title: '',
		completed: false
	},

	//Toggle the 'completed' state of this todo item
	toggle: function(){
		this.save({
			completed: !this.get('completed')
		});
	}

});