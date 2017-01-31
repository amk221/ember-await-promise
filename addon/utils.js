import Ember from 'ember';
import computed from 'ember-computed';
import RSVP from 'rsvp';

const { ObjectProxy, PromiseProxyMixin } = Ember;
const { resolve } = RSVP;
const PromiseProxy = ObjectProxy.extend(PromiseProxyMixin);

export default function promiseObject(key) {
  return computed(key, function() {
    return PromiseProxy.create({
      promise: resolve(this.get(key))
    });
  });
}
