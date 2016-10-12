/**
 * Created by pblazinski on 12.10.16.
 */

import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {ActivatedRoute} from "@angular/router";
import {MsToMinPipe} from "../msToMin.pipe";

@Component({
    moduleId: module.id.toString(),
    selector: 'album-details',
    templateUrl: 'album.component.html',
    providers: [SpotifyService]
})
export class AlbumComponent implements OnInit {

    id: string;
    album: any;
    tracks: any;

    constructor(private spotifyService: SpotifyService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe(id=> {
                this.spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })

                this.spotifyService.getAlbumTracks(id)
                    .subscribe(album => {
                        this.tracks = album.items;
                    })
            })
    }

}
