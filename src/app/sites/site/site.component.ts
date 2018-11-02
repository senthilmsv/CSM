import { Component, OnInit } from '@angular/core';

import { SitesService } from '../../services/sites.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  constructor(private siteService: SitesService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
  }
}
