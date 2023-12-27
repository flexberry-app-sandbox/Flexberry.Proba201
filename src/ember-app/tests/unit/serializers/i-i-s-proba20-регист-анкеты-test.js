import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba20-регист-анкеты', 'Unit | Serializer | i-i-s-proba20-регист-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba20-регист-анкеты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba20-итог-собес',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
