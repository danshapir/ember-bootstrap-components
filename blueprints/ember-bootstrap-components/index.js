module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
      var _this = this;
      return this.addBowerPackagesToProject( [{name: 'bootstrap', target: 'latest'}, {name:'waves', target:'latest'}]).then(function() {
        return _this.addAddonToProject({name: 'ember-cli-sass', target: 'latest'});
      });;
   }
};
