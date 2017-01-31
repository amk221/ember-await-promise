import RSVP from 'rsvp';
import { promiseObject, promiseArray } from 'ember-promise-cps/macros';
import EmberObject from 'ember-object';
import { module, test } from 'qunit';
const { defer } = RSVP;

module('macros');

const object = EmberObject.extend({
  objProxy: promiseObject('objPromise'),
  arrProxy: promiseArray('arrPromise')
}).create();



test('#promiseObject (resolves ok)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('objPromise', deferred.promise);

  deferred.resolve({ foo: 'bar' });

  return object.get('objProxy').then(() => {
    assert.equal(object.get('objProxy.foo'), 'bar');
    assert.strictEqual(object.get('objProxy.isFulfilled'), true);
  });
});


test('#promiseObject (rejects)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('objPromise', deferred.promise);

  deferred.reject({ foo: 'bar' });

  return object.get('objProxy').catch(() => {
    assert.equal(object.get('objProxy.reason.foo'), 'bar');
    assert.strictEqual(object.get('objProxy.isRejected'), true);
  });
});


test('#promiseArray (resolves ok)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('arrPromise', deferred.promise);

  deferred.resolve([ 'foo', 'bar' ]);

  return object.get('arrProxy').then(() => {
    assert.deepEqual(object.get('arrProxy').toArray(), ['foo', 'bar']);
    assert.strictEqual(object.get('arrProxy.isFulfilled'), true);
  });
});


test('#promiseObject (rejects)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('arrPromise', deferred.promise);

  deferred.reject({ foo: 'bar' });

  return object.get('arrProxy').catch(() => {
    assert.equal(object.get('arrProxy.reason.foo'), 'bar');
    assert.strictEqual(object.get('arrProxy.isRejected'), true);
  });
});
