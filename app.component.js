/*
angular.module('Brewery', ['Brewery.service', 'Brewery.filter', 'Brewery.directive'])
    .directive('app', function(BreweryService){
        return {
            template: '<main>'+
            '<beer-item ng-repeat="b in app.beers" beer="b" ></beer-item>'+
            '</main>',
            controllerAs: 'app',
            bindToController: true,
            controller: function(){
                this.beers = BreweryService.getBeers();
            }
        }

    });
*/

(function(app) {
        app.AppComponent =
            ng.core.Component({
            selector: 'app',
            template: '<main>'+
            '<beer-item *ngFor="let b of beers" [beer]="b" ></beer-item>'+
            '</main>',
                directives : [app.BeerItem]
        })
        .Class({
            constructor:[app.BreweryService,function( BreweryService ) {
               // this.beers = BreweryService.getBeers();
                this._BreweryService = BreweryService;

                this.beers = this._BreweryService.getBeers();
            }]
        });

})(window.app || (window.app = {}));