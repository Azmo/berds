import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ILand } from '../models/land';

@Component({
  selector: 'app-land-edit',
  templateUrl: './land-edit.component.html',
  styleUrls: ['./land-edit.component.css'],
})
export class LandEditComponent implements OnInit {
  private landCollection: AngularFirestoreCollection<ILand>;
  public land: ILand;

  constructor(private afs: AngularFirestore, private router: Router) {
  }

  ngOnInit() {
    this.land = {
      address: '',
      bal: '',
      developer: '',
      estate: '',
      fencing: false,
      frontLandscaping: false,
      length: 0,
      noise: false,
      price: 0,
      pricePerSqm: 0,
      rearLandscaping: false,
      siteClass: '',
      size: 0,
      title: false,
      width: 0,
    };
    this.landCollection = this.afs.collection<ILand>('land');
  }

  onSubmit() {
    this.landCollection.add(this.land).then((value) => console.log(value), (error) => console.log(error));
    this.router.navigate(['/land']);
  }
}
