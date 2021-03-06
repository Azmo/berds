import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinishingItemComponent } from './finishing-item/finishing-item.component';
import { HomeComponent } from './home/home.component';
import { HouseEditComponent } from './house-edit/house-edit.component';
import { HouseComponent } from './house/house.component';
import { LandEditComponent } from './land-edit/land-edit.component';
import { LandComponent } from './land/land.component';
import { PackageComponent } from './package/package.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }, {
        path: 'houses',
        component: HouseComponent,
    }, {
        path: 'houses/edit/:id',
        component: HouseEditComponent,
    }, {
        path: 'lands',
        component: LandComponent,
    }, {
        path: 'lands/edit/:id',
        component: LandEditComponent,
    }, {
        path: 'packages',
        component: PackageComponent,
    }, {
        path: 'items',
        component: FinishingItemComponent,
    }, {
        path: '**',
        component: HomeComponent,
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
