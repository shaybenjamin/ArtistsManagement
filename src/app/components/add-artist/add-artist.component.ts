import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss']
})
export class AddArtistComponent implements OnInit {

  artist = {
    id: '',
    name: '',
    yearOfBirth: '',
    pictureLink: ''
  };

  submitted = false;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
  }

  saveArtist(): void {
    const data = {
      id: this.artist.id,
      name: this.artist.name,
      yearOfBirth: this.artist.yearOfBirth,
      pictureLink: this.artist.pictureLink
    };

    this.artistService.addArtist(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArtist(): void {
    this.submitted = false;
    this.artist = {
      id: '',
      name: '',
      yearOfBirth: '',
      pictureLink: ''
    }
  }

}
