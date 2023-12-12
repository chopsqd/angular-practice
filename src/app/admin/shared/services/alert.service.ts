import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface IAlert {
  type: 'success' | 'warning' | 'danger'
  text: string
}

@Injectable()
export class AlertService {
  public alert$ = new Subject<IAlert>()

  success(text: string) {
    this.alert$.next({type: 'success', text})
  }

  warning(text: string) {
    this.alert$.next({type: 'warning', text})
  }

  danger(text: string) {
    this.alert$.next({type: 'danger', text})
  }
}
