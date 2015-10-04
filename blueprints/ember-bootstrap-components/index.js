module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
       return this.addBowerPackagesToProject( [{name: 'bootstrap', target: 'latest'}, {name:'waves', target:'^0.7.2'}]);
   }
};
