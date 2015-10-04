module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
        this.addBowerPackageToProject('bootstrap');
       return this.addBowerPackageToProject('waves', '^0.7.2');
   }
};
