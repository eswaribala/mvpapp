import {Item, Menu} from './menu';


export  let menuData: Menu[] = [
  new Menu('Home', 'pi pi-fw pi-home', 'Home', [new Item('Context',

    'pi pi-fw pi-share-alt', 'Home/Context'),
    new Item('Testimonials', 'pi pi-fw pi-pencil', 'Home/Testimonials')

  ]),

  new Menu('Products', 'pi pi-fw pi-plus', 'Products', [
    new Item('Diamond', 'pi pi-fw pi-key', 'Products/Diamond'),
    new Item('Gold', 'pi pi-fw pi-pencil', 'Products/Gold'),
    new Item('Silver', 'pi pi-fw pi-cog', 'Products/Silver')

  ]),

  /* new Menu('Login', 'pi pi-fw pi-sign-in','Login',[ ] ),*/

  new Menu('Savings Scheme', 'pi pi-fw pi-bell', 'SavingsScheme', [ ]),
  new Menu('Offers', 'pi pi-fw pi-sign-out', 'Offers', [

  ]),


];
