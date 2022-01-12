import { browser, element, by, ExpectedConditions, protractor} from 'protractor';
import { Alert, WebElement } from 'selenium-webdriver';
import {Workbook, Row, Cell, Worksheet} from 'exceljs';
import { LoginPage } from './login.po';
describe('Protractor Typescript Demo', function() {
    let page: LoginPage;
    beforeEach(() => {
        page = new LoginPage();
      });
	   browser.ignoreSynchronization = true; // for non-angular websites
	   it('Read users from Excel for Login ', function() {
        // set implicit time to 30 seconds
        browser.manage().timeouts().implicitlyWait(30000);
       // browser.waitForAngular();
		// create object for workbook
		      const wb: Workbook = new Workbook();
		// read xlsx file type
		      wb.xlsx.readFile('F:\\aspireangular2020\\mvpapp\\e2e\\src\\mvpusers.xlsx').then(function() {
			// sheet object
			const sheet: Worksheet = wb.getWorksheet('Sheet1');
			// row objct
			let rowObject: Row;
			// cell object
   let cellObject: Cell;
            // print
   for (let i = 1; i < 5; i++) {
                    rowObject = sheet.getRow(i);
                    cellObject = rowObject.getCell(1);
                    console.log(cellObject.value);
                    const name = cellObject.value;
                    cellObject = rowObject.getCell(2);
                    console.log(cellObject.value);
                    const password = cellObject.value;
                     // use the cell value as url for navigation
                     // browser.get(cellObject.toString())
                    const userObj = {
                         userName: name,
                         password

                     };
                    page.navigateTo();
                    expect(page.getMenuPageInfo(userObj)).toEqual('Products');


            }


		});
	});
});
