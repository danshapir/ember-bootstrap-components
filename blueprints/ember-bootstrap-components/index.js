module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
      var _this = this;
      return this.addBowerPackagesToProject( [{name: 'bootstrap', target: 'latest'}, {name:'waves', target:'^0.7.2'}]).then(function() {
        return _this.addPackagesToProject([{name: 'ember-cli-sass', target: 'latest'}]);
      });;
   }
};
