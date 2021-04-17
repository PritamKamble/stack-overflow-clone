import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/interfaces/profile.interface';
import { ProfilesResponse } from 'src/app/interfaces/profiles-response.interface';
import { StackExchangeService } from 'src/app/services/stack-exchange/stack-exchange.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoading = false;
  isError = false;
  userId: number = +this.active.snapshot.params.id;
  profilesResponse!: ProfilesResponse;
  profile!: Profile;

  constructor(
    private readonly active: ActivatedRoute,
    private readonly stackExchangeService: StackExchangeService,
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles(): void {
    this.isLoading = true;
    this.isError = false;
    this.stackExchangeService.getProfiles(this.userId).subscribe(res => {
      this.profilesResponse = res;
      if (this.profilesResponse && this.profilesResponse.items && this.profilesResponse.items.length) {
        this.profile = this.profilesResponse.items[0];
      }
      this.isLoading = false;
    }, () => {
      this.isError = true;
      this.isLoading = false;
    });
  }

}
