import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//const baseUrl = 'http://localhost:8081/Artists/';
const baseUrl = 'http://localhost:3000/artists/';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists(): Promise<any> {
    return this.http.get(baseUrl+ 'getArtists').toPromise();
  }

  getArtist(artistId): Observable<any> {
    return this.http.get(baseUrl+ 'getArtist/' + artistId);
  }

  addArtist(data): Observable<any> {
    return this.http.post(baseUrl + 'addArtist', data);
  }

  getSongs(): Observable<any> {
    return this.http.get(baseUrl+ 'getSongs');
  }

  addSong(data): Observable<any> {
    return this.http.post(baseUrl + 'addSong', data);
  }

  getSongsByArtist(artistId): Observable<any> {
    return this.http.get(baseUrl+ 'getSongsByArtist/' + artistId);
  }

  deleteArtist(artistId): Promise<any> {
    return this.http.delete(baseUrl + 'deleteArtist/' + artistId).toPromise();
  }

  deleteArtistSong(id): Observable<any> {
    return this.http.get(baseUrl + 'deleteArtistSong/run/' + id);
  }
}
