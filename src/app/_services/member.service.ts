import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = "https://localhost:7235/api/member";
  constructor(private httpClient: HttpClient) {

  }
  getMembers(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.baseUrl);
  }
  getMemberByUsername(username: string) {
    return this.httpClient.get<Member>(`${this.baseUrl}/${username}`);
  }
}
