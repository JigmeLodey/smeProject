import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

const routes: Routes = [{ path: '', component: LandingComponent }, { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'share', loadChildren: () => import('./share/share.module').then(m => m.ShareModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
