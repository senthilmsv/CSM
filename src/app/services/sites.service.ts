import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../model/site.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  private sitesUrl = `${environment.serviceBaseUrl}/Sites`; // URL to web api
  constructor(private http: HttpClient) {}

  getSites(): Observable<Site[]> {
    return this.http.get<Site[]>(this.sitesUrl);
  }

  getSite(id: string): Observable<Site> {
    const url = `${this.sitesUrl}/${id}`;
    return this.http.get<Site>(url);
  }

  addSite(site: Site): Observable<Site> {
    return this.http.post<Site>(this.sitesUrl, site, httpOptions);
  }

  deleteSite(site: Site | string): Observable<Site> {
    const id = typeof site === 'string' ? site : site.SiteId;
    const url = `${this.sitesUrl}/${id}`;

    return this.http.delete<Site>(url, httpOptions);
  }

  updateSite(site: Site): Observable<any> {
    const url = `${this.sitesUrl}/${site.SiteId}`;
    return this.http.put(url, site, httpOptions);
  }
}
