import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./components/about.component";
import {ModuleWithProviders} from "@angular/core";
import {SearchComponent} from "./components/search.component";
/**
 * Created by pblazinski on 11.10.16.
 */

const appRoutes: Routes = [

    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
