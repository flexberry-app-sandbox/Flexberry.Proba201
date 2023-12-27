import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba20-вакант-должн', 'Unit | Model | i-i-s-proba20-вакант-должн', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba20-вакант-должн',
    'model:i-i-s-proba20-граф-собес',
    'model:i-i-s-proba20-должн-сотр',
    'model:i-i-s-proba20-организация',
    'model:i-i-s-proba20-планир-собес',
    'model:i-i-s-proba20-рег-результ',
    'model:i-i-s-proba20-регист-анкеты',
    'model:i-i-s-proba20-сотрудники',
    'model:i-i-s-proba20-т-ч-граф-собес',
    'model:i-i-s-proba20-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
