import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  public profiles: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getNewProfiles(60);
  }

  getNewProfiles(amount: number): void {
    console.log('getting data...', amount);
    this.profileService.getProfiles(amount).subscribe((data: any) => {
      if (data) {
        data.results.forEach(element => {
          this.profiles.push(element);
        });
      }
    });
  }

}
