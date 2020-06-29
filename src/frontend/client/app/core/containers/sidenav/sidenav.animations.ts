import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const ANIMATION = '230ms cubic-bezier(0.4, 0.0, 0.2, 1)';

export const logoAnimation = trigger('logoAnimation', [
  state(
    'expanded',
    style({
      opacity: 1,
      marginLeft: '16px',
      marginRight: '8px',
      maxWidth: '200px',
    }),
  ),
  state(
    'collapsed',
    style({
      opacity: 0,
      marginLeft: 0,
      marginRight: 0,
      maxWidth: 0,
    }),
  ),
  transition('expanded <=> collapsed', animate(ANIMATION)),
]);

export const listItemAnimation = trigger('listItemAnimation', [
  state(
    'expanded',
    style({
      marginLeft: 0,
      marginRight: '8px',
      borderTopLeftRadius: 0,
      borderTopRightRadius: '24px',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: '24px',
    }),
  ),
  state(
    'collapsed',
    style({
      marginLeft: '8px',
      marginRight: '8px',
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      borderBottomLeftRadius: '24px',
      borderBottomRightRadius: '24px',
    }),
  ),
  transition(
    'expanded => collapsed',
    group([
      query('@listItemTextAnimation', animateChild()),
      query('@listItemIconAnimation', animateChild(), { optional: true }),
      query('@listItemAvatarAnimation', animateChild(), { optional: true }),
      query('@listItemBadgeAnimation', animateChild(), { optional: true }),
      query(':self', animate(ANIMATION)),
    ]),
  ),
  transition(
    'collapsed => expanded',
    group([
      query('@listItemTextAnimation', animateChild()),
      query('@listItemIconAnimation', animateChild(), { optional: true }),
      query('@listItemAvatarAnimation', animateChild(), { optional: true }),
      query('@listItemBadgeAnimation', animateChild(), { optional: true }),
      query(':self', animate(ANIMATION)),
    ]),
  ),
]);

export const listItemTextAnimation = trigger('listItemTextAnimation', [
  state(
    'expanded',
    style({
      opacity: 1,
      maxWidth: '200px',
      marginRight: '16px',
    }),
  ),
  state(
    'collapsed',
    style({
      opacity: 0,
      maxWidth: 0,
      marginRight: 0,
    }),
  ),
  transition('expanded <=> collapsed', animate(ANIMATION)),
]);

export const listItemIconAnimation = trigger('listItemIconAnimation', [
  state(
    'expanded',
    style({
      paddingLeft: '16px',
      paddingRight: '16px',
      paddingTop: '4px',
      paddingBottom: '4px',
    }),
  ),
  state(
    'collapsed',
    style({
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '4px',
      paddingBottom: '4px',
    }),
  ),
  transition('expanded <=> collapsed', animate(ANIMATION)),
]);

export const listItemAvatarAnimation = trigger('listItemAvatarAnimation', [
  state(
    'expanded',
    style({
      paddingLeft: '14px',
      paddingRight: '14px',
      paddingTop: '4px',
      paddingBottom: '4px',
    }),
  ),
  state(
    'collapsed',
    style({
      paddingLeft: '6px',
      paddingRight: '6px',
      paddingTop: '4px',
      paddingBottom: '4px',
    }),
  ),
  transition('expanded <=> collapsed', animate(ANIMATION)),
]);

export const listItemBadgeAnimation = trigger('listItemBadgeAnimation', [
  state(
    'expanded',
    style({
      opacity: 1,
      maxWidth: '60px',
      marginRight: '8px',
      marginLeft: '16px',
      paddingLeft: '4px',
      paddingRight: '4px',
      borderWidth: '1px',
    }),
  ),
  state(
    'collapsed',
    style({
      opacity: 0,
      maxWidth: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderWidth: 0,
    }),
  ),
  transition('expanded <=> collapsed', animate(ANIMATION)),
]);
