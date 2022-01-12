import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MenuComponent} from './menu/menu.component';
import {ProductComponent} from './product/product.component';
import {DiamondComponent} from './diamond/diamond.component';
import {GoldComponent} from './gold/gold.component';
import {SilverComponent} from './silver/silver.component';
import { SavingsschemeComponent } from './savingsscheme/savingsscheme.component';
import {HomeComponent} from './home/home.component';
import {ContextComponent} from './context/context.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import { PreloadAllModules} from '@angular/router';
const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent,
    pathMatch: 'full',

  },
  { path: 'Register', component: RegisterComponent, pathMatch: 'full',
  },
  {path: 'Menu', component: MenuComponent,
  children: [{
    path: 'Products',
    component: ProductComponent,

    children: [
      {
        path: 'Diamond',
        component: DiamondComponent

      },
      {
        path: 'Silver',
        component: SilverComponent

      },
      {
        path: 'Gold',
        component: GoldComponent
      }


    ]
  },

    {
      path: 'Home',
      component: HomeComponent,

      children: [
        {
          path: 'Context',
          component: ContextComponent

        },
        {
          path: 'Testimonials',
          component: TestimonialsComponent

        }


      ]
    },
    {
      path: 'SavingsScheme',
      pathMatch: 'full',
      component: SavingsschemeComponent
    }
  ]

  },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: '**', redirectTo: '/Login' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
