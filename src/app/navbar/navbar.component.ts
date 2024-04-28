import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  
goToServicePage() {
  this.router.navigate(['/service'])
 }

goToContactaboutusPage() {
  this.router.navigate(['/contactaboutus'])
 }


}
 

