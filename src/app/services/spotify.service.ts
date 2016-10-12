import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
/**
 * Created by pblazinski on 11.10.16.
 */

@Injectable()
export class SpotifyService {

    constructor(private http: Http) {
    }

    search(q: string, type: string) {
        return this.http.get("https://api.spotify.com/v1/search?q=" + q + "&offset=0&limit=10&type=" + type)
            .map(res=> res.json());
    }

    getArtist(id: string) {
        return this.http.get("https://api.spotify.com/v1/artists/"+id)
            .map(res=> res.json());
    }
}
