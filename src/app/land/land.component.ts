import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ILand } from '../models/land';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css'],
})
export class LandComponent implements OnInit {
  location = '';
  private landCollection: AngularFirestoreCollection<ILand>;
  public lands: Observable<ILand[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.landCollection = this.afs.collection<ILand>('land');
    this.lands = this.landCollection.valueChanges();
  }

}
