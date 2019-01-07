import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private static API_URL = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(ProfileService.API_URL + '?nat=de');
  }

  getProfiles(amount: number) {
    return this.http.get(ProfileService.API_URL + '?results=' + amount);
  }
}
