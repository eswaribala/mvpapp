import { NgModule } from '@angular/core';
import { AspiremvplibComponent } from './aspiremvplib.component';
import { AuthComponent } from './auth/auth.component';



@NgModule({
  declarations: [AspiremvplibComponent, AuthComponent],
  imports: [
  ],
  exports: [AspiremvplibComponent]
})
export class AspiremvplibModule { }
