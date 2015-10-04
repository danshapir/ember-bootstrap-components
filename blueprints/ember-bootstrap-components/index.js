module.exports = {
   normalizeEntityName: function() {
   },

   afterInstall: function() {
       return Promise.all([this.addBowerPackageToProject('bootstrap'),this.addBowerPackageToProject('waves', '^0.7.2')]);
   }
};
