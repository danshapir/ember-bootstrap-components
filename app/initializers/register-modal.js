import instanceInitializer from "../instance-initializers/register-modal";

export default {
  name: instanceInitializer.name,

  initialize: function(App) {
    if (App.instanceInitializer) { return; }

    instanceInitializer.initialize(App);
  }
};
