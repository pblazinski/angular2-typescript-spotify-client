import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {Artist} from "../models/Artist";

@Component({
    moduleId: module.id.toString(),
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
    query: string;
    searchResult: Artist[];

    constructor(private spotifyService: SpotifyService) {
    }

    search() {
        this.spotifyService.search(this.query, "artist")
            .subscribe(artist => {
                this.searchResult = artist.artists.items;
            })
    }

    ngOnInit() { }

}