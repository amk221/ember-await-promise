import Ember from 'ember';
import RSVP from 'rsvp';

const { ObjectProxy, PromiseProxyMixin } = Ember;
const { resolve } = RSVP;
const PromiseProxy = ObjectProxy.extend(PromiseProxyMixin);

export function promiseObject(maybePromise) {
  return PromiseProxy.create({
    promise: resolve(maybePromise)
  });
}
