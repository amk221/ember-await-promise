import Ember from 'ember';
import RSVP from 'rsvp';

const { resolve } = RSVP;
const { ObjectProxy, ArrayProxy, PromiseProxyMixin } = Ember;
const PromiseProxyObject = ObjectProxy.extend(PromiseProxyMixin);
const PromiseProxyArray = ArrayProxy.extend(PromiseProxyMixin);


export function promiseObject(maybePromise) {
  return PromiseProxyObject.create({
    promise: resolve(maybePromise)
  });
}

export function promiseArray(maybePromise) {
  return PromiseProxyArray.create({
    promise: resolve(maybePromise)
  });
}
