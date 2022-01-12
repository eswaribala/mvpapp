import { browser, by, element } from 'protractor';
import * as data from '../siemenconfig.json';
export class AppPage {
  navigateTo() {
    console.log(data);
    return browser.get(data.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.tagName('h1')).getText() as Promise<string>;
  }
}
