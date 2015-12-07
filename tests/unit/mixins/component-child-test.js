import Ember from 'ember';
import ComponentChildMixin from 'ember-bootstrap-components/mixins/component-child';
import ComponentParentMixin from 'ember-bootstrap-components/mixins/component-parent';

import { module, test } from 'qunit';

module('Unit | Mixin | component child');



test('child component registers itself with parent upon didInsertElement event', function(assert) {
  var ComponentChildObject = Ember.Component.extend(ComponentChildMixin);
  var child = ComponentChildObject.create();
  var ComponentParentObject = Ember.Component.extend(ComponentParentMixin);
  var parent = ComponentParentObject.create();

  assert.expect(1);

  // mock out registerChild method
  parent.registerChild = function(registerChild) {
    assert.equal(registerChild, child, 'child registers itself with parent');
  };

  child.parentView = parent;

  child.trigger('didInsertElement');

});


test('child component removes itself from parent upon willDestroyElement event', function(assert) {
  var ComponentChildObject = Ember.Component.extend(ComponentChildMixin);
  var child = ComponentChildObject.create();
  var ComponentParentObject = Ember.Component.extend(ComponentParentMixin);
  var parent = ComponentParentObject.create();

  assert.expect(1);

  // mock out removeChild method
  parent.removeChild = function(registerChild) {
    assert.equal(registerChild, child, 'child removes itself from parent');
  };

  child.parentView = parent;

  child.trigger('willDestroyElement');

});


