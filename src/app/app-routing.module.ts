import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DoclistComponent} from './doclist/doclist.component';
import { TravelComponent } from './travel/travel.component';
import { TravelResolver } from './travel/travel.resolver';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DoclistResolver } from './doclist/doclist.resolver';
import { AccessGuard } from './access.guard';


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
        component: DoclistComponent,
        canActivate: [
            AccessGuard
        ],
        resolve: {
            docs: DoclistResolver
        }
    },
    {
        path: 'travel',
        component: TravelComponent,
        canActivate: [
            AccessGuard
        ],
        resolve: {
            programmes: TravelResolver
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AccessGuard,
        DoclistResolver
    ]
})
export class AppRoutingModule {}
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);

