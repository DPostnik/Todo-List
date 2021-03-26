import {Component, Input, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss'],
  animations: [
    trigger('notification',[
      // state('before', style({ opacity: 1, backgroundColor: '#eee' })),
      // state('appear', style({ opacity: 0 })),
      transition(
        '* => *', animate('5s',
          keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 0.5}),
            style({opacity: 0, offset: 1}),
          ]
        ))

      )
    ]
      )
  ]
})
export class NotificatorComponent implements OnInit {

  @Input() notification: string;

  constructor() { }

  ngOnInit(): void {
  }

}
