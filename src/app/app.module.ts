import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MenuService} from './services/menuservice';
import {MenubarModule} from 'primeng/menubar';
import {UserService} from './services/userservice';
import {AuthService} from './services/authservice';
import {LoginComponent} from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'rxjs';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RegisterComponent} from './register/register.component';
import { DiamondComponent } from './diamond/diamond.component';
import { ProductComponent } from './product/product.component';
import { SilverComponent } from './silver/silver.component';
import { GoldComponent } from './gold/gold.component';
import {PhotoService} from './services/photoservice';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {APP_BASE_HREF} from '@angular/common';
import {ParentComponent} from './savingsscheme/parent/parent.component';
import {ChildComponent} from './savingsscheme/child/child.component';
import {SavingsschemeComponent} from './savingsscheme/savingsscheme.component';
import { TitleComponent } from './savingsscheme/title/title.component';
import { MessageComponent } from './savingsscheme/message/message.component';
import { createCustomElement } from '@angular/elements';
import {MockHttpCalIInterceptor} from './interceptors/MockHttpInterceptor';
import {EqualValidator} from './register/matchvalidator';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import { UserPipe } from './user.pipe';
import {ChartModule} from 'primeng/chart';
import { HomeComponent } from './home/home.component';
import { ContextComponent } from './context/context.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    DiamondComponent,
    ProductComponent,
    SilverComponent,
    GoldComponent,
    ParentComponent,
    ChildComponent,
    SavingsschemeComponent,
    TitleComponent,
    MessageComponent,
    EqualValidator,
    UserPipe,
    HomeComponent,
    ContextComponent,
    TestimonialsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MenubarModule,
     BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
   MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    ChartModule,




  ],
  providers: [MenuService, UserService, AuthService,
    PhotoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    },


  ],

  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MessageComponent,
      { injector });
    customElements.define('app-footer', customElement);
  }

  ngDoBootstrap() {

  }

}
