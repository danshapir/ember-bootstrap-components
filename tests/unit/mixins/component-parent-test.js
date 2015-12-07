import Ember from 'ember';
import ComponentParentMixin from 'ember-bootstrap-components/mixins/component-parent';
import { module, test } from 'qunit';

module('Unit | Mixin | component parent');

test('children property is an empty array', function(assert) {
  var ComponentParentObject = Ember.Component.extend(ComponentParentMixin);
  var subject = ComponentParentObject.create();
  var children = subject.get('children');

  assert.equal(Ember.typeOf(children), 'array', 'children is an array');
  assert.equal(children.length, 0, 'children array is empty.');
});


test('registerChild adds child component to children array', function(assert) {
  var ComponentParentObject = Ember.Component.extend(ComponentParentMixin);
  var subject = ComponentParentObject.create();
  var child = Ember.Object.create({
    foo: 'bar'
  });

  assert.expect(2);

  Ember.run(function(){
    subject.registerChild(child);
  });

  Ember.run(function(){
    var children = subject.get('children');
    assert.equal(children.length, 1, 'children array has one item.');
    assert.equal(children.get('firstObject'), child, 'children array has child as its only item.');
  });

});

test('removeChild removes existing child component from children array', function(assert) {
  var ComponentParentObject = Ember.Component.extend(ComponentParentMixin);
  var subject = ComponentParentObject.create();
  var child = Ember.Object.create({
    foo: 'bar'
  });

  assert.expect(1);

  Ember.run(function() {
    subject.registerChild(child);
  });

  Ember.run(function() {
    subject.removeChild(child);
  });

  Ember.run(function(){
    var children = subject.get('children');
    assert.equal(children.length, 0, 'children array is empty.');
  });

});
