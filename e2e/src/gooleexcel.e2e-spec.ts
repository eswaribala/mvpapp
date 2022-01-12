import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import {Workbook, Row, Cell,Worksheet} from 'exceljs';
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Excel File Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// create object for workbook
		var wb:Workbook = new Workbook();
		// read xlsx file type
		wb.xlsx.readFile("F:\\aspireangular2020\\mvpapp\\e2e\\src\\product.xlsx").then(function(){
			//sheet object
			let sheet:Worksheet = wb.getWorksheet("Sheet1");
			//row objct
			let rowObject:Row = sheet.getRow(1);
			// cell object
			let cellObject:Cell = rowObject.getCell(1);
			//print
			console.log(cellObject.value);
			//use the cell value as url for navigation
			browser.get(cellObject.toString())
		});
	});
});