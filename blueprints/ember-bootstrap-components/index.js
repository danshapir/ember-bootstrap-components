module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
       return this.addBowerPackageToProject( [{name: 'bootstrap', target: 'latest'}, {name:'waves', target:'^0.7.2'}]);
   }
};
