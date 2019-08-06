import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

   nuevasCanciones: any[] = [];
   loading: boolean;
  // paises: any[] = [];
   constructor( private spotify: SpotifyService) { 
       
  // 	console.log('¡constructor del home Hecho!');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( (resp: any)=>{
  //   	this.paises = resp;
  //   	console.log(resp);
  //   });
       this.loading = true;

       this.spotify.getNewReleases()
       .subscribe( (data: any) =>{
         this.nuevasCanciones = data;
         this.loading = false;
       });
   }
}
