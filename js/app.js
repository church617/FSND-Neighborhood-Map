var model ={
	currentCat: null;
	cats:[
		{
			clickCount:0,
			name: 'Tabby',
			imgSrc:'img/cat1.jpg'
		},
		{
			clickCount:0,
			name: 'Tony',
			imgSrc: 'img/cat2.jpg'
		},
		{
			clickCount: 0,
			name: 'Tim',
			imgSrc:'img/cat3.jpeg'
		},
		{
			clickCount:0,
			name: 'Leroy',
			imgSrc: 'img/cat4.jpeg'
		},
		{
			clickCount:0,
			name: 'Abby',
			imgSrc:'cat5.jpg'
		}
	]		

};

var octopus={
	init: function(){
		model.currentCat()= model.cats[0];
		listView.init();
		catView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	incrementCount: function(){
		model.currentCat.clickCount++;
		catView.render();
	},

	setCurrentCat: function(cat){
		model.currentCat=cat;
	},

	getCats: function(){
		return model.cats;
	}

};

var listView={
	init: function(){
		var 
	},

	
};