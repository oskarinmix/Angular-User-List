import { Component, OnInit } from "@angular/core";
import users from "./users";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'Labs XD Innovation Test';
  users = null;

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  ngOnInit() {
    const shuffleUsers = this.shuffle(users);

    setTimeout(() => {
      this.users = shuffleUsers.slice(0, 10);
    }, 2000);
  }
}
