var scatteredStore = require('scattered-store');
var arg = process.argv[2];
var pessoa = process.argv[3];

var store = scatteredStore.create('store/');

store.get('pessoas').then(function (pessoas) {
	if(!pessoas)
		store.set('pessoas',[]);

	if(arg==='get')
		console.log(pessoas);

	if(arg==='save'){
		pessoas.push(pessoa);
		store.set('pessoas',pessoas)
			.then(function(){
				console.log(pessoa+" foi add.")
			});
	}

});