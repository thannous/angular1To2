angular.module('Brewery.filter', []).filter('NoteFilter', function(){
	return function(value){
		return value > 3 ? 'glyphicon glyphicon-heart' : '';
	};
})
(function(app) {
	app.NoteFilter  =
		ng.core.Pipe({
			name : 'NoteFilter'
		})
			.Class({
				constructor:[app.BreweryService,function( BreweryService ) {
					// this.beers = BreweryService.getBeers();
					this._BreweryService = BreweryService;

					this.beers = this._BreweryService.getBeers();
				}]
			});

})(window.app || (window.app = {}));
