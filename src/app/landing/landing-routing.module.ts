import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DesktopComponent} from './desktop/desktop.component';
import {AuthGuard} from '../auth/auth.guard';
import {AuthRoleGuard} from '../auth/auth.RoleGuard';

const routes: Routes = [{ path: '', component: DesktopComponent },
  { path: 'admin', canActivate: [AuthRoleGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'user',  canActivate: [AuthGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'share',  canActivate: [AuthGuard], loadChildren: () => import('./share/share.module').then(m => m.ShareModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
