import { FormsModule } from '@angular/forms';
import { Crisis, CrisisService } from './crisis.service';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisislist.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrisisHomeComponent } from './crisishome.component';
import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from '../Message/composemessage.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        CrisisCenterRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisHomeComponent,
        CrisisDetailComponent
    ],
    providers: [CrisisService, DialogService]
})
export class CrisisCenterModule {}