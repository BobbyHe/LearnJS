document.writeln('hello world');

var user = {};
user.firstname = 'Bobby';
user.lastname = 'He';
user.print = function(){
	document.writeln('test');
}
user.print();
document.writeln(user.firstname);

var another_user = Object.create(user);
document.writeln(typeof another_user.firstname);
document.writeln(another_user.firstname);
another_user.print();
another_user.firstname = '123';
document.writeln(user.firstname);
document.writeln(another_user.firstname);

for(var i=0; i < 0; i++)
	{console.log('1');}

Function.prototype.method = function(name, func) {
	if(!this.prototype[name]) {
		this.prototype[name] = func;
	}
	return this;
};

Number.method('integer', function(){
	return Math[this<0 ? 'ceil' : 'floor'](this);
});

String.method('trim', function() {
	return this.replace(/^s+|s\s+$/g, '');
});

document.writeln('integer:'+(10/3).integer());
document.writeln('   trim:as  df        '.trim()+'asdf');

var fade = function (node) {
	var level = 1;
	var step = function () {
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if(level<15)
		{
			level+=1;
			setTimeout(step,100);
		}
	};
	setTimeout(step,100)
};

fade(document.body);