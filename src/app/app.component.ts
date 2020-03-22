import { Component, OnInit } from '@angular/core';
import  users from './users';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Labs XD Innovation Test";
  users = null;

  ngOnInit() {
    setTimeout(() => {
      this.users = users;
    }, 2000);
  }
}
