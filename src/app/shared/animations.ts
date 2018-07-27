import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';

export const pageAnimation = trigger('pageAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0, transform: 'translateX(-15px)' })], { optional: true }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1, transform: 'translateX(0)' }), animate('0.3s', style({ opacity: 0, transform: 'translateX(20px)' }))],
      { optional: true }
    ),
    query(
      ':enter',
      [ animate('0.3s', style({ opacity: 1, transform: 'translateX(0)' }))],
      { optional: true }
    )
  ])
]);

export const flyInOutAnimation = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(300)
  ]),
  transition('* => void', [
    animate(300, style({ transform: 'scaleY(0) translateX(100%)' }))
  ])
]);

export const cardFocusAnimation = trigger('cardFocus', [
  state('unfocussed', style({ transform: 'scale(1)' })),
  state('focussed', style({ transform: 'scale(1.04)' })),
  transition('unfocussed => focussed', [
    group([query('@noteFocus', animateChild()), animate('300ms ease-in')])
  ]),
  transition('focussed => unfocussed', [
    group([query('@noteFocus', animateChild()), animate('300ms ease-out')])
  ])
]);

export const noteFocusAnimation = trigger('noteFocus', [
  state('unfocussed', style({ opacity: 0 })),
  state('focussed', style({ opacity: 1 })),
  transition('unfocussed => focussed', [
    animate(
      300,
      keyframes([
        style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.7 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])
    )
  ])
]);
