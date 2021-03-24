import {Component, OnInit} from '@angular/core';
import {Notification} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-notificator',
  templateUrl: './notificator.component.html',
  styleUrls: ['./notificator.component.scss']
})
export class NotificatorComponent implements OnInit {

  public notificator: Notification[] = [
    Notification.Create, Notification.Error, Notification.Remove
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
