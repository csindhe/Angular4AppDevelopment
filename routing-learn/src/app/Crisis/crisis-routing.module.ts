import { CrisisDetailResolver } from './crisis-detail-resolver.service';
import { CanDeactivateGuard } from './../can-deactivate-guard.service';
import { element } from 'protractor';
import { CrisisHomeComponent } from './crisishome.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisislist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComposeMessageComponent } from '../Message/composemessage.component';

const crisisRoutes: Routes = [
    { path: '', component: CrisisCenterComponent, children: [
        { path: '', component: CrisisListComponent, children: [
            { 
                path: ':id', 
                component: CrisisDetailComponent, 
                canDeactivate: [ CanDeactivateGuard ],
                resolve: { crisis: CrisisDetailResolver }
            },
            { path: '', component: CrisisHomeComponent}
        ]}
        // {
        //     path: 'compose', 
        //     component: ComposeMessageComponent, 
        //     outlet: 'popup'
        // }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(crisisRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [ CrisisDetailResolver ]
})
export class CrisisCenterRoutingModule {}