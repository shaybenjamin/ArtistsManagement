import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistModel } from '../models/ArtistModel';

//const baseUrl = 'http://localhost:8081/Artists/';
const baseUrl = 'http://localhost:3000/artists/';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Promise<ArtistModel[]> {
    return this.http.get<ArtistModel[]>(baseUrl + 'getArtists').toPromise();
  }

  getArtist(artistId): Observable<any> {
    return this.http.get(baseUrl+ 'getArtist/' + artistId);
  }

  addArtist(data): Observable<any> {
    return this.http.post(baseUrl + 'addArtist', data);
  }

  getSongs(): Promise<any> {
    return this.http.get(baseUrl + 'getSongs').toPromise();
  }

  addSong(data): Promise<any> {
    return this.http.post(baseUrl + 'addSong', data).toPromise();
  }

  getSongsByArtist(artistId): Observable<any> {
    return this.http.get(baseUrl+ 'getSongsByArtist/' + artistId);
  }

  deleteArtist(artistId): Promise<any> {
    return this.http.delete(baseUrl + 'deleteArtist/' + artistId).toPromise();
  }

  deleteArtistSong(artistId, songName): Promise<any> {
    return this.http.delete(baseUrl + 'deleteArtistSong/' + songName + '/' + artistId).toPromise();
  }
}
