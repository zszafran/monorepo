import { CreateEffectMetadata } from '@ngrx/effects/src/models';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

export type DispatchingEffect = Observable<Action> & CreateEffectMetadata;

export type NonDispatchingEffect = CreateEffectMetadata;
