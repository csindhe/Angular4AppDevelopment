import { ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-crisislist',
    templateUrl: './crisislist.component.html',
    styleUrls: ['./crisislist.component.css']
})

export class CrisisListComponent implements OnInit {
    crises: Observable<Crisis[]>;
    selectedId: number;
    
    constructor(private service: CrisisService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.crises = this.route.paramMap.switchMap((params: ParamMap) => {
            this.selectedId = +params.get('id');
            return this.service.getCrises();
        })
    }

    onSelect(crisis: Crisis) {
        this.selectedId = crisis.id;
    }

}