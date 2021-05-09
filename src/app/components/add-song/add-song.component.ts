import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  song = {
    // _id: '',
    name: '',
    artistId: ''
  };

  constructor(private route: ActivatedRoute, private artistsService: ArtistService, private router: Router) { }

  ngOnInit(): void {
    this.song.artistId = this.route.snapshot.paramMap.get('artistId');
  }

  saveSong() {
    this.artistsService.addSong(this.song).then(sng => this.router.navigate(['artists']));
  }

}
