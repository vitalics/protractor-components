
import { browser, $$ } from 'protractor';
import { Collection, Component } from 'protractor-components';

import { Reason } from './reason.component';
import { ReasonCollection } from './reason.collection';

describe('tests', function () {
  beforeAll(async () => {
    await browser.get('https://angularjs.org/');
  })

  describe('collection', () => {
    it('await for...of', async () => {
      const reasons = new Collection($$('.row.first .span4'));

      for await (const reason of reasons) {
        expect(Component.isComponent(reason)).toBeTruthy();
        const text = await reason.getText();
        expect(typeof text).toBe('string');
      }

      expect(await reasons.getLength()).toBe(3);
    });

    it('custom collection', async () => {
      const collection = new ReasonCollection();

      const length = await collection.getLength();

      expect(length).toBe(3);

      for await (const reason of collection) {
        expect(reason.getBody).toBeDefined();
        expect(reason.getHeader).toBeDefined();
      }
    })
  });

  describe('component', () => {
    it('custom component should work correctly', async () => {
      const reason = new Reason();

      const header = await reason.getHeader();
      const body = await reason.getBody();

      const EXPECTED_BODY = `HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.`

      expect(header).toBe('Why AngularJS?');
      expect(body).toBe(EXPECTED_BODY);
    })
  });
});
