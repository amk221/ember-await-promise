import Route from 'ember-route';
import items from '../utils/items';
import RSVP from 'rsvp';
import { later } from 'ember-runloop';

export default Route.extend({
  actions: {
    loadItems() {
      const success = Boolean(this.get('controller.resolveSuccessfully'));
      const delay   = Number(this.get('controller.promiseDelay'));

      const promise = new RSVP.Promise((resolve, reject) => {
        later(() => {
          if (success) {
            resolve({ items });
          } else {
            reject(new Error('Could not load items'));
          }
        }, delay);
      });

      this.set('controller.promiseForItems', promise);
    }
  }
});
