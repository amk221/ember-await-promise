import computed from 'ember-computed';
import { promiseObject as promiseObjectFactory } from 'ember-promise-cps/utils';

export function promiseObject(key) {
  return computed(key, function() {
    return promiseObjectFactory(this.get(key));
  });
}
