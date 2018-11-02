import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { SiteComponent } from './sites/site/site.component';
import { SiteListComponent } from './sites/site-list/site-list.component';

const routes: Routes = [
  {
    path: 'sites',
    component: SitesComponent
  },
  {
    path: 'site/add',
    component: SiteComponent
  },
  {
    path: 'site/:id',
    component: SiteComponent
  },
  {
    path: '',
    redirectTo: 'sites',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
