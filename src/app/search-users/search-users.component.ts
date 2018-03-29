import { Component, OnInit, Input } from "@angular/core";
import { SearchUsersService } from "../search-users.service";

@Component({
  selector: "app-search-users",
  templateUrl: "./search-users.component.html",
  styleUrls: ["./search-users.component.css"]
})
export class SearchUsersComponent implements OnInit {
  name: string;
  place: string;
  language: string;

  results: any[] = []; // This will hold the data coming from the service
  selected: boolean = false; // Flag to check if a user is clicked or not
  selectedUser: any; // presently Selected user details
  error_text: string = ""; // So called error reporing text to the end user

  constructor(private searchService: SearchUsersService) {}
  ngOnInit() {}

  search(name: string, place: string, language: string) {
    this.selected = false;
    this.error_text = "";
    if (name || place || language) {
      this.name = name;
      this.place = place;
      this.language = language;
      this.searchService
        .getUsersByNameAndPlaceAndLanguage(name, place, language)
        .subscribe(
          users => {
            this.results = users;
          },
          error => {
            this.results = [];
            this.error_text = "Sorry! No users found. Try again.";
            console.error(error);
          }
        );
    }
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      userDatils => {
        this.selectedUser = userDatils;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    );
  }
}
