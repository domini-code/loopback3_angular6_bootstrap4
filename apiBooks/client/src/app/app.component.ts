import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private spinnerService: NgxSpinnerService) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url.match('/user/') || event.url.match('/admin/')) {
                    this.hideElement = true;
                } else {
                    this.hideElement = false;
                }
            }
        });
    }

    public hideElement = false;

    ngOnInit() {
        this.spinner();
    }

    spinner(): void {
        this.spinnerService.show();
        setTimeout(() => {
            this.spinnerService.hide();
        }, 2000);
    }

}







