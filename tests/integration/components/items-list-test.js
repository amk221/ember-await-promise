import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import { later } from 'ember-runloop';
import jQuery from 'jquery';
import RSVP from 'rsvp';
const { Promise } = RSVP;

moduleForComponent('items-list', {
  integration: true
});

function delay(value, ms) {
  return new Promise(resolve => {
    later(() => {
      resolve(value);
    }, ms);
  });
}


test('it renders', function(assert) {
  assert.expect(1);

  const firstItems = delay({
    items: [
      { name: 'foo' },
      { name: 'bar' }
    ]
  }, 200);

  const secondItems = delay({
    items: [
      { name: 'bar' },
      { name: 'baz' }
    ]
  }, 100);

  this.set('promiseForItems', firstItems);

  this.render(hbs`{{items-list items-promise=promiseForItems}}`);

  this.set('promiseForItems', secondItems);

  return wait().then(() => {

    const items = this.$('li')
      .map((i, li) => jQuery(li).text())
      .toArray();

    assert.deepEqual(items, ['bar', 'baz'],
      'only interested in the result of the most recently set promise');
  });
});
