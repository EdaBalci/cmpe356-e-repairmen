import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogalgaz',
  templateUrl: './dogalgaz.component.html',
  styleUrl: './dogalgaz.component.css'
})
export class DogalgazComponent {
  constructor(private router: Router) { }

  navigateToChild() {
    this.router.navigate(['dogalgaz', 'goksudogalgaz']);
  }
}
