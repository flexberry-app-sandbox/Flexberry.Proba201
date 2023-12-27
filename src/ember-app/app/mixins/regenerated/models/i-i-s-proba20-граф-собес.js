import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧГрафСобес: DS.hasMany('i-i-s-proba20-т-ч-граф-собес', { inverse: 'графСобес', async: false })
});

export let ValidationRules = {
  тЧГрафСобес: {
    descriptionKey: 'models.i-i-s-proba20-граф-собес.validations.тЧГрафСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафСобесE', 'i-i-s-proba20-граф-собес', {
    тЧГрафСобес: hasMany('i-i-s-proba20-т-ч-граф-собес', 'Т ч граф собес', {
      планирСобес: belongsTo('i-i-s-proba20-планир-собес', 'Планир собес', {
        иметьПриСебе: attr('Иметь при себе', { index: 1, hidden: true }),
        датаПланСобес: attr('', { index: 2 }),
        регистАнкеты: belongsTo('i-i-s-proba20-регист-анкеты', '', {
          фИОКандидата: attr('ФИО', { index: 3 }),
          вакантДолжн: belongsTo('i-i-s-proba20-вакант-должн', '', {
            должности: attr('должность', { index: 4 })
          }, { index: -1, hidden: true }),
          датаРегистр: attr('Дата Регистрации', { index: 5 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'иметьПриСебе' })
    })
  });

  modelClass.defineProjection('ГрафСобесL', 'i-i-s-proba20-граф-собес', {
    
  });
};
