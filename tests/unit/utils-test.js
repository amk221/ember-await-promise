import RSVP from 'rsvp';
import { promiseObject, promiseArray } from 'ember-promise-cps/utils';
import EmberObject from 'ember-object';
import { module, test } from 'qunit';
const { defer } = RSVP;

module('utils');


const object = EmberObject.extend({}).create();




test('#promiseObject (resolves ok)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('proxy', promiseObject(deferred.promise));

  deferred.resolve({ foo: 'bar' });

  return object.get('proxy').then(() => {
    assert.equal(object.get('proxy.foo'), 'bar');
    assert.strictEqual(object.get('proxy.isFulfilled'), true);
  });
});


test('#promiseObject (rejects)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('proxy', promiseObject(deferred.promise));

  deferred.reject({ foo: 'bar' });

  return object.get('proxy').catch(() => {
    assert.equal(object.get('proxy.reason.foo'), 'bar');
    assert.strictEqual(object.get('proxy.isRejected'), true);
  });
});


test('#promiseArray (resolves ok)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('proxy', promiseArray(deferred.promise));

  deferred.resolve([ 'foo', 'bar' ]);

  return object.get('proxy').then(() => {
    assert.deepEqual(object.get('proxy').toArray(), ['foo', 'bar']);
    assert.strictEqual(object.get('proxy.isFulfilled'), true);
  });
});


test('#promiseArray (rejects)', function(assert) {
  assert.expect(2);

  const deferred = defer();

  object.set('proxy', promiseArray(deferred.promise));

  deferred.reject({ foo: 'bar' });

  return object.get('proxy').catch(() => {
    assert.equal(object.get('proxy.reason.foo'), 'bar');
    assert.strictEqual(object.get('proxy.isRejected'), true);
  });
});
