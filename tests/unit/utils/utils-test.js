import RSVP from 'rsvp';
import { promiseObject } from 'ember-promise-cps/macros';
import EmberObject from 'ember-object';
import { module, test } from 'qunit';
const { defer } = RSVP;

module('awaitPromise');

const object = EmberObject.extend({
  proxy: promiseObject('promise')
}).create();



test('successful promises', function(assert) {
  assert.expect(3);

  const deferred = defer();

  object.set('promise', deferred.promise);

  deferred.resolve({ foo: 'bar' });

  return object.get('proxy').then(() => {
    assert.deepEqual(object.get('proxy.content'), { foo: 'bar' });
    assert.equal(object.get('proxy.foo'), 'bar');
    assert.strictEqual(object.get('proxy.isFulfilled'), true);
  });
});


test('unsuccessful promises', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('promise', deferred.promise);

  deferred.reject({ foo: 'bar' });

  return object.get('proxy').catch(() => {
    assert.deepEqual(object.get('proxy.reason'), { foo: 'bar' });
    assert.strictEqual(object.get('proxy.isRejected'), true);
  });
});
