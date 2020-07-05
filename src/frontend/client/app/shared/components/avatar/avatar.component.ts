import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-shared-avatar-component',
  templateUrl: 'avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly src$ = new ReplaySubject<string>(1);

  @Input()
  set src(value: string) {
    this.src$.next(value);
  }
}
