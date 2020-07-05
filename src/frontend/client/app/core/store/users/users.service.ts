import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from './users.models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getCurrent(): Observable<User> {
    return of({
      username: 'mortyboi69',
      avatar: '../../../../assets/morty.png',
    });
  }
}
