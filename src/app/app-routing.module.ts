import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DoclistComponent} from './doclist/doclist.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: LoginComponent
    },
    {
        path: 'docs',
        component: DoclistComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

