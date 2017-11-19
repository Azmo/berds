import { Component, OnInit } from '@angular/core';
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

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.land = { address: '' };
    this.landCollection = this.afs.collection<ILand>('land');
  }

  onSubmit() {
    this.landCollection.add(this.land).then((value) => console.log(value), (error) => console.log(error));
  }
}
