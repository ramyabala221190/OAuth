import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Routes} from '@angular/Router';

import { AppComponent } from './components/app.component';
import {BootComponent} from './components/boot.component';
import {RedirectComponent} from './components/redirect.component';
import {AppService} from './services/app.service';

const routes:Routes=[
   {
path:'',
redirectTo:'/home',
pathMatch:'full'
  }
  ,
  {
    path:'OAuthHome',
    component:RedirectComponent
  },
 {
    path:'home',
    component:AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,RedirectComponent,BootComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [BootComponent]
})
export class AppModule { }
