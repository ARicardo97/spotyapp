import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
     console.log('Spotify Service Listo');
   }

   getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
     'Authorization': 'Bearer BQCXhi9ourl98-AHgrPhluf7PVylBvNlAqsKa8pDqwOviq2sPA8q57LqvPpATScaGljdZ_FhydaoNR3wrmo'
     });

     return this.http.get(url, { headers });
   }

   getNewReleases(){
   // const headers = new HttpHeaders({
   //   'Authorization': 'Bearer BQDJzw39OJzotlY_6ya2AKaUcgpPRfsDhdpQ-eMR66NSWt_-sf5PuLvmMx4f3hcDkBtC9wAFzkWMhnyzO8ezVffdCJxgWr2no_lbJy7OmROa-dP7vJ2WRuq8Jjq-QWA7IFyr6EzG2GmY7kHbB5fOPrL0YjB1asS7RA'
   // });
          //CODIGO COMPRIMIDO
   return this.getQuery('browse/new-releases?limit=20')
   .pipe( map(data => data['albums'].items));
   // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
   //        .pipe( map(data => data['albums'].items));
   }

   getArtistas(termino: string){
     //  const headers = new HttpHeaders({
     //   'Authorization': 'Bearer BQCjzydpJ8i0HASlxzNcxfxsVaoGVlC8BUAEYPMU9h9StAqv1jAa-gFiX4zLlgelBDYRxQVfdwyfRO_5QiY'
     // });	
        //CODIGO COMPRIMIDO  // SE REEMPLAZA APOSTROFES X BACTICS [``]
      return this.getQuery(`search?q= ${ termino }&type=artist&limit=15`)
      .pipe(map(data =>data['artists'].items));
      // return this.http.get(`https://api.spotify.com/v1/search?q= ${ termino }&type=artist&limit=15`, { headers })
      //     .pipe(map(data =>data['artists'].items));
     
   }

   getArtista(id: string){

      return this.getQuery(`artists/${id}`);
      //.pipe(map(data =>data['artists'].items)); 
   }

   getTopTracks(id: string){

      return this.getQuery(`artists/${ id }/top-tracks?country=us`)
       .pipe(map(data =>data['tracks'])); 
   }
}
