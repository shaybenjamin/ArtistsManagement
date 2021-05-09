import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  artists: any;
  currentArtist = null;
  currentIndex = -1;
  title = '';

  constructor(private artistsService: ArtistService) { }


  ngOnInit(): void {
    this.refreshList();
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
      self.retrieveArtists();
    }).catch(error => {
      console.log(error);
      self.retrieveArtists();
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
