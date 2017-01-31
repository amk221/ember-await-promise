import Component from 'ember-component';
import { promiseObject } from 'ember-promise-cps/macros';

export default Component.extend({
  proxy: promiseObject('items-promise')
});
