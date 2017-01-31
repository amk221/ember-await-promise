import computed from 'ember-computed';
import {
  promiseObject as promiseObjectFactory,
  promiseArray as promiseArrayFactory
} from 'ember-promise-cps/utils';

export function promiseObject(key) {
  return computed(key, function() {
    return promiseObjectFactory(this.get(key));
  });
}

export function promiseArray(key) {
  return computed(key, function() {
    return promiseArrayFactory(this.get(key));
  });
}
