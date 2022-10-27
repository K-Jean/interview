import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";


export class UserService {
    private API_URL = 'http://localhost:8080/rest/';
  
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.API_URL + 'users');
    }

    successInterview(user: User): Observable<void> {
        return this.http.post<void>(this.API_URL + user.id + '/' + 'success', {});
    }
}