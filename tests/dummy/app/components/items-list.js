import Component from 'ember-component';
import { promiseArray } from 'ember-promise-cps/macros';

export default Component.extend({
  proxy: promiseArray('items-promise')
});
