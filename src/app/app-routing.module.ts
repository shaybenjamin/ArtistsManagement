import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsListComponent },
  { path: 'artists/:id', component: ArtistDetailsComponent },
  { path: 'add-artist', component: AddArtistComponent },
  { path: 'add-song/:artistId', component: AddSongComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
