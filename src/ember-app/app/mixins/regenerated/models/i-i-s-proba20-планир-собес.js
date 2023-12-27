import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПланСобес: DS.attr('date'),
  иметьПриСебе: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-proba20-организация', { inverse: null, async: false }),
  регистАнкеты: DS.belongsTo('i-i-s-proba20-регист-анкеты', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПланСобес: {
    descriptionKey: 'models.i-i-s-proba20-планир-собес.validations.датаПланСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иметьПриСебе: {
    descriptionKey: 'models.i-i-s-proba20-планир-собес.validations.иметьПриСебе.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba20-планир-собес.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистАнкеты: {
    descriptionKey: 'models.i-i-s-proba20-планир-собес.validations.регистАнкеты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланирСобесE', 'i-i-s-proba20-планир-собес', {
    иметьПриСебе: attr('Иметь при себе', { index: 0 }),
    датаПланСобес: attr('Дата Регистрации', { index: 1 }),
    организация: belongsTo('i-i-s-proba20-организация', 'Организация', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    регистАнкеты: belongsTo('i-i-s-proba20-регист-анкеты', 'Регист анкеты', {
      фИОКандидата: attr('ФИО', { index: 5, hidden: true }),
      вакантДолжн: belongsTo('i-i-s-proba20-вакант-должн', '', {
        должности: attr('должность', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОКандидата' })
  });

  modelClass.defineProjection('ПланирСобесL', 'i-i-s-proba20-планир-собес', {
    иметьПриСебе: attr('Иметь при себе', { index: 0 }),
    датаПланСобес: attr('Дата Регистрации', { index: 1 }),
    организация: belongsTo('i-i-s-proba20-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    регистАнкеты: belongsTo('i-i-s-proba20-регист-анкеты', 'ФИО', {
      фИОКандидата: attr('ФИО', { index: 3 }),
      вакантДолжн: belongsTo('i-i-s-proba20-вакант-должн', '', {
        должности: attr('должность', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
