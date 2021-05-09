import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistModel } from 'src/app/models/ArtistModel';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  artists: ArtistModel[];
  songs: any;
  currentArtist = null;
  currentIndex = -1;
  title = '';

  constructor(private artistsService: ArtistService, private router: Router) { }


  ngOnInit(): void {
    this.refreshList();

  }

  addNewSong(artistId) {
    this.router.navigate(['add-song/' + artistId]);
  }

  getArtistSongs(artistId) {
    //alert('ds');
    console.log('artist' + artistId);
    let res = this.songs.filter(sng => sng.artistId === artistId);
    console.log(res);
    return res;
  }

  toggleSongs(artistId) {
    if (this.currentArtist === artistId)
      this.currentArtist = null;
    else
      this.currentArtist = artistId;
  }

  getSongs(): void {
    this.artistsService.getSongs().then(data => {
      this.songs = data;
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }

  retrieveArtists(): void {
    this.artistsService.getArtists().then(data => {
      this.artists = data;
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }

  refreshList(): void {
    this.retrieveArtists();
    this.getSongs();
    this.currentArtist = null;
    this.currentIndex = -1;
  }

  setActiveArtist(artist, index): void {
    this.currentArtist = artist;
    this.currentIndex = index;
  }

deleteArtist(id): void {
  const self = this;
    this.artistsService.deleteArtist(id).then(response => {
      console.log(response);
      self.refreshList();
    }).catch(error => {
      console.log(error);
      self.refreshList();
    });
}

  deleteSong(id, songName) {
    const self = this;
    this.artistsService.deleteArtistSong(id, songName).then(response => {
      console.log(response);
      self.refreshList();
    }).catch(error => {
      console.log(error);
      self.refreshList();
    });
  }
  // removeAllArtists(): void {
  //   const self = this;
  //   this.artistsService.deleteArtist(self.currentArtist.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.retrieveArtists();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

}
