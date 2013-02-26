define( function() {

this.Class = function(name) {
	this.name = name;
};

this.prototype = {

	say: function(message) {
		return this.name + ': ' + message;
	},

	go : function () {
		alert(name);
	}
};

});