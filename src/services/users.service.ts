import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/user-state';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly http = inject(HttpClient);

  fetchUsers(): Observable<{ users: User[] }> {
    const params = {
      limit: 10,
      select: ['firstName', 'lastName', 'age', 'gender'],
    };
    return this.http.get<{ users: User[] }>('https://dummyjson.com/users', {
      params,
    });
  }
}
