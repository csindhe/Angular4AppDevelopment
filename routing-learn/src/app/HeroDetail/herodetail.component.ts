import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { slideInDownAnimation } from './../Animations/animations';
import { Observable } from 'rxjs/Observable';
import { HeroService } from './../Services/hero.service';
import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Hero } from '../Services/hero';

@Component({
    selector: 'app-herodetail',
    templateUrl: './herodetail.component.html',
    styleUrls: ['./herodetail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Observable<Hero>;

    // @HostBinding('@routeAnimation') routeAnimation = true;
    // @HostBinding('style.display') display = 'block';
    // @HostBinding('style.position') position = 'absolute';

    constructor(private router: Router, 
                private route: ActivatedRoute, 
                private service: HeroService) {

    }

    ngOnInit() {
        this.hero = this.route.paramMap
                    .switchMap((params: ParamMap) => 
                        this.service.getHero(params.get('id'))
                    );
        
        /**An alternative to observable -- snapshot -- reusability will be a dud */
        // let id = this.route.snapshot.paramMap.get('id');
        // this.hero = this.service.getHero(id);
    }

    gotoHeroes(hero: Hero) {
        let HeroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: HeroId, foo: 'foo' } ]);
    }

}