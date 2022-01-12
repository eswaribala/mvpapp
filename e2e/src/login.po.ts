import { browser, by, element, promise, until, WebElement } from 'protractor';
import * as data from '../siemenconfig.json';

export class LoginPage {
    navigateTo() {

        return browser.get(data.baseUrl) as Promise<any>;
    }


    getMenuPageInfo(item) {
        element(by.name('userName')).clear();
        element(by.name('password')).clear();
        element(by.name('userName')) .sendKeys(item.userName);
        element(by.name('password')).sendKeys(item.password);
        element(by.xpath('/html/body/app-root/login-app/div/form/fieldset/button[1]/span/mat-icon')).click();
      // protractor api
        browser.waitForAngular();
        return element(by.xpath('/html/body/app-root/app-menu/p-menubar/div/p-menubarsub/ul/li[2]/a/span[2]')).getText();
    }

}
