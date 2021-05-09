import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistService } from './services/artist.service';
import { AddSongComponent } from './components/add-song/add-song.component';


@NgModule({
  declarations: [
    AppComponent,
    AddArtistComponent,
    ArtistDetailsComponent,
    ArtistsListComponent,
    AddSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
