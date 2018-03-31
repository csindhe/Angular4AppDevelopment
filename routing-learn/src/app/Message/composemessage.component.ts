import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../Animations/animations';
import { Router } from '@angular/router';
import { DialogService } from '../Crisis/dialog.service';

@Component({
    selector: 'app-composemessage',
    templateUrl: "./composemessage.component.html",
    styles: [ ':host { position: relative; bottom: 10%; }' ],
    animations: [ slideInDownAnimation ]
})

export class ComposeMessageComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    details: string;
    sending = false;

    constructor(private router: Router, private service: DialogService) {

    }

    ngOnInit() {
        
    }

    closePopup() {
        this.router.navigate([{ outlets: { popup: null } }])
    }

    send() {
        this.sending = true;
        this.details = 'Sending Message....';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

}