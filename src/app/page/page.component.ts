import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{
   // title = 'reproductiondepage';
  // // titre: string = 'Bienvenue sur myKN';

  // titre= {titre:"Bienvenue sur myKN",
  // nom:"Contrôle complet de vos envois",para:"Trouvez des devis de fret compétitifs, effectuez des réservations instantanées et suivez vos envois avec myKN.",}


  constructor (private router: Router) {}
  ngOnInit(): void {}

onInscrire(){
  this.router.navigate(['/inscription']);
}
onConnecter(){
  this.router.navigate(['/connexion']);
}
}
