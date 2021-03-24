import {Component, Input, OnInit} from '@angular/core';
import {Notification} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss']
})
export class NotificatorComponent implements OnInit {

  @Input() notification: string;

  constructor() { }

  ngOnInit(): void {
  }

}
