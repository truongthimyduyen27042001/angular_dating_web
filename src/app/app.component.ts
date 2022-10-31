import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppUser } from './models/app-user';
import { AccountService } from './_services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le Tuan';
  users: AppUser[] = [];
  constructor(private httpClient: HttpClient,
    public accountService: AccountService
  ) {

  }
  ngOnInit(): void {
    // this.accountService.reLogin();
    // this.httpClient.get<AppUser[]>("https://localhost:7235/api/Auth").subscribe((res: AppUser[]) => {
    //   this.users = res
    //   console.log(res)
    // }, err => {
    //   console.log(err)
    // })
  }
}
