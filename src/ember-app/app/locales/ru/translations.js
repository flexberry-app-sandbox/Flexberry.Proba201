import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba20ВакантДолжнLForm from './forms/i-i-s-proba20-вакант-должн-l';
import IISProba20ГрафСобесLForm from './forms/i-i-s-proba20-граф-собес-l';
import IISProba20ДолжнСотрLForm from './forms/i-i-s-proba20-должн-сотр-l';
import IISProba20ОрганизацияLForm from './forms/i-i-s-proba20-организация-l';
import IISProba20ПланирСобесLForm from './forms/i-i-s-proba20-планир-собес-l';
import IISProba20РегРезультLForm from './forms/i-i-s-proba20-рег-результ-l';
import IISProba20РегистАнкетыLForm from './forms/i-i-s-proba20-регист-анкеты-l';
import IISProba20СотрудникиLForm from './forms/i-i-s-proba20-сотрудники-l';
import IISProba20ВакантДолжнEForm from './forms/i-i-s-proba20-вакант-должн-e';
import IISProba20ГрафСобесEForm from './forms/i-i-s-proba20-граф-собес-e';
import IISProba20ДолжнСотрEForm from './forms/i-i-s-proba20-должн-сотр-e';
import IISProba20ОрганизацияEForm from './forms/i-i-s-proba20-организация-e';
import IISProba20ПланирСобесEForm from './forms/i-i-s-proba20-планир-собес-e';
import IISProba20РегРезультEForm from './forms/i-i-s-proba20-рег-результ-e';
import IISProba20РегистАнкетыEForm from './forms/i-i-s-proba20-регист-анкеты-e';
import IISProba20СотрудникиEForm from './forms/i-i-s-proba20-сотрудники-e';
import IISProba20ВакантДолжнModel from './models/i-i-s-proba20-вакант-должн';
import IISProba20ГрафСобесModel from './models/i-i-s-proba20-граф-собес';
import IISProba20ДолжнСотрModel from './models/i-i-s-proba20-должн-сотр';
import IISProba20ОрганизацияModel from './models/i-i-s-proba20-организация';
import IISProba20ПланирСобесModel from './models/i-i-s-proba20-планир-собес';
import IISProba20РегРезультModel from './models/i-i-s-proba20-рег-результ';
import IISProba20РегистАнкетыModel from './models/i-i-s-proba20-регист-анкеты';
import IISProba20СотрудникиModel from './models/i-i-s-proba20-сотрудники';
import IISProba20ТЧГрафСобесModel from './models/i-i-s-proba20-т-ч-граф-собес';
import IISProba20ТЧРегРезультModel from './models/i-i-s-proba20-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba20-вакант-должн': IISProba20ВакантДолжнModel,
    'i-i-s-proba20-граф-собес': IISProba20ГрафСобесModel,
    'i-i-s-proba20-должн-сотр': IISProba20ДолжнСотрModel,
    'i-i-s-proba20-организация': IISProba20ОрганизацияModel,
    'i-i-s-proba20-планир-собес': IISProba20ПланирСобесModel,
    'i-i-s-proba20-рег-результ': IISProba20РегРезультModel,
    'i-i-s-proba20-регист-анкеты': IISProba20РегистАнкетыModel,
    'i-i-s-proba20-сотрудники': IISProba20СотрудникиModel,
    'i-i-s-proba20-т-ч-граф-собес': IISProba20ТЧГрафСобесModel,
    'i-i-s-proba20-т-ч-рег-результ': IISProba20ТЧРегРезультModel
  },

  'application-name': 'Proba20',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba20',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba20',
          title: 'Proba20'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proba20: {
          caption: 'Proba20',
          title: 'Proba20',
          'i-i-s-proba20-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba20-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba20-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-proba20-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba20-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba20-должн-сотр-l': {
            caption: 'Должн сотр',
            title: ''
          },
          'i-i-s-proba20-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba20-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba20-вакант-должн-l': IISProba20ВакантДолжнLForm,
    'i-i-s-proba20-граф-собес-l': IISProba20ГрафСобесLForm,
    'i-i-s-proba20-должн-сотр-l': IISProba20ДолжнСотрLForm,
    'i-i-s-proba20-организация-l': IISProba20ОрганизацияLForm,
    'i-i-s-proba20-планир-собес-l': IISProba20ПланирСобесLForm,
    'i-i-s-proba20-рег-результ-l': IISProba20РегРезультLForm,
    'i-i-s-proba20-регист-анкеты-l': IISProba20РегистАнкетыLForm,
    'i-i-s-proba20-сотрудники-l': IISProba20СотрудникиLForm,
    'i-i-s-proba20-вакант-должн-e': IISProba20ВакантДолжнEForm,
    'i-i-s-proba20-граф-собес-e': IISProba20ГрафСобесEForm,
    'i-i-s-proba20-должн-сотр-e': IISProba20ДолжнСотрEForm,
    'i-i-s-proba20-организация-e': IISProba20ОрганизацияEForm,
    'i-i-s-proba20-планир-собес-e': IISProba20ПланирСобесEForm,
    'i-i-s-proba20-рег-результ-e': IISProba20РегРезультEForm,
    'i-i-s-proba20-регист-анкеты-e': IISProba20РегистАнкетыEForm,
    'i-i-s-proba20-сотрудники-e': IISProba20СотрудникиEForm
  },

});

export default translations;
