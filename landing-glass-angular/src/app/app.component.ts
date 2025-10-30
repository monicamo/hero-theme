import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
}
