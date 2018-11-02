import { Component, OnInit } from '@angular/core';

import { SitesService } from '../services/sites.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private siteService: SitesService) {}

  ngOnInit() {
  }

}
