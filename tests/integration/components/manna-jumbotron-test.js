import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manna-jumbotron', 'Integration | Component | manna jumbotron', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manna-jumbotron}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manna-jumbotron}}
      template block text
    {{/manna-jumbotron}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
