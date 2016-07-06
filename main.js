(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent, app.BreweryService);
    });
})(window.app || (window.app = {}));