import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {AboutComponent} from "./components/about.component";
import {SearchComponent} from "./components/search.component";
import {SpotifyService} from "./services/spotify.service";
import {ArtistComponent} from "./components/artist.component";
import {AlbumComponent} from "./components/album.component";
import {MsToMinPipe} from "./msToMin.pipe";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        AboutComponent,
        ArtistComponent,
        AlbumComponent,
        MsToMinPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [SpotifyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
