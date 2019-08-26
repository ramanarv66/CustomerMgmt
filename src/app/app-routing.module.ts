import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcustomersComponent } from './viewcustomers/viewcustomers.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AngularfomrsComponent } from './angularfomrs/angularfomrs.component';
import { CanDeactiveGuard } from './guards/candeactivate.guard';
import { AuthguardGuard } from './guards/authguard.guard';
import { RedirectComponent } from './redirect/redirect.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:'viewcustomers', component:ViewcustomersComponent,canActivate:[AuthguardGuard]},
  {path:'addcustomer', component:AddcustomerComponent,canActivate:[AuthguardGuard] ,canDeactivate: [CanDeactiveGuard]},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent,canActivate:[AuthguardGuard]},
  {path:'about', component: AboutComponent, canActivate:[AuthguardGuard]},
  {path:'angularforms', component: AngularfomrsComponent},
  {path:'redirect', component: RedirectComponent},
  {path:'signin', component: SigninComponent},
  {path:'contact', component:ContactComponent, canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
