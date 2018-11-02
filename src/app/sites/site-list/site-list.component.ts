import { Component, OnInit } from '@angular/core';
import { Site } from '../../model/site.model';
import { SitesService } from '../../services/sites.service';
import { ToastrService } from 'ngx-toastr';

import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.css']
})
export class SiteListComponent implements OnInit {
  modalReference: NgbModalRef;
  siteList: Site[];

  selectedSite: Site;
  closeResult: string;
  subTitle: string;
  editMode: string;

  constructor(
    private siteService: SitesService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSites();
  }
  getSites() {
    return this.siteService.getSites().subscribe(sites => {
      // console.log(sites);
      this.siteList = sites;
    });
  }
  showForNew() {
    this.selectedSite = new Site();
    this.editMode = 'Add';
    this.subTitle = 'Add New Site';
  }
  showForEdit(site) {
    this.subTitle = 'Edit site: ' + site.SiteName;
    this.editMode = 'Edit';
    this.selectedSite = site;
  }
  onDelete(site) {
    if (confirm('Are you sure to delete this Site ?') === true) {
      //console.log(site.SiteId);
      this.siteService.deleteSite(site.SiteId).subscribe(() => {
        this.toastr.info('Site "' + site.SiteName + '" deleted Successfully', 'Sites');
        this.getSites();
      });
    }
  }

  open(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    this.modalReference.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  SaveAndClose() {
    // Validation
    let isValid = false;
    if (
      this.selectedSite.SiteName === 'undefined' ||
      this.selectedSite.SiteName === ''
    ) {
      this.toastr.warning('Site Name is required', 'Sites');
      return false;
    } else {
      isValid = true;
    }

    if (isValid) {
      if (this.editMode === 'Add') {
        this.siteService.addSite(this.selectedSite).subscribe(() => {
          this.toastr.success('New Site Added Succcessfully', 'Sites');
          this.getSites();
        });
      } else {
        this.siteService.updateSite(this.selectedSite).subscribe(() => {
          this.toastr.success('Site changes updated Succcessfully', 'Sites');
          this.getSites();
        });
      }
      this.modalReference.close('Save And Close');
    }
  }
}
