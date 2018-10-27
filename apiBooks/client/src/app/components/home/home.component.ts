import { Component, OnInit } from "@angular/core";
import { DataApiService } from "src/app/services/data-api.service";
import { BookInterface } from "../../models/book-interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private dataApi: DataApiService) {}
  private books: BookInterface;
  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this.dataApi
      .getNotOffers()
      .subscribe((books: BookInterface) => (this.books = books));
  }
}
