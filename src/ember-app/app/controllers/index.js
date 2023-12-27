import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba20.caption'),
          title: i18n.t('forms.application.sitemap.proba20.title'),
          children: [{
            link: 'i-i-s-proba20-рег-результ-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-рег-результ-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-рег-результ-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proba20-планир-собес-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-планир-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-планир-собес-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proba20-граф-собес-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-граф-собес-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-граф-собес-l.title'),
            children: null
          }, {
            link: 'i-i-s-proba20-вакант-должн-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-вакант-должн-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-вакант-должн-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proba20-организация-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-организация-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proba20-должн-сотр-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-должн-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-должн-сотр-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-proba20-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-сотрудники-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-proba20-регист-анкеты-l',
            caption: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-регист-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba20.i-i-s-proba20-регист-анкеты-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})