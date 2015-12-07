export default {
  name: 'register-modal',
  initialize: function(instance) {
	window.Bootstrap = {};
	window.Bootstrap.ModalManager = instance.lookup("service:bootstrap-modal-manager");
  }
};
