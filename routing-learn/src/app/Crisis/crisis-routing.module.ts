import { element } from 'protractor';
import { CrisisHomeComponent } from './crisishome.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisislist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComposeMessageComponent } from '../Message/composemessage.component';

const crisisRoutes: Routes = [
    { path: 'crisis-center', component: CrisisCenterComponent, children: [
        { path: '', component: CrisisListComponent, children: [
            { path: ':id', component: CrisisDetailComponent},
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
    ]
})
export class CrisisCenterRoutingModule {}