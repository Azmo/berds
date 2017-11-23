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
  priceMin: number = null;
  priceMax: number = null;
  private landsCollection: AngularFirestoreCollection<ILand>;
  public lands: Observable<ILand[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    this.landsCollection = (this.priceMin || this.priceMax) ?
      (this.priceMin && !this.priceMax) ?
        this.afs.collection<ILand>('lands', (ref) => ref.where('price', '>=', this.priceMin)) :
        ((!this.priceMin) && this.priceMax) ?
          this.afs.collection<ILand>('lands', (ref) => ref.where('price', '<=', this.priceMax)) :
          this.afs.collection<ILand>('lands', (ref) => ref.where('price', '>=', this.priceMin).where('price', '<=', this.priceMax)) :
      this.afs.collection<ILand>('lands');

    // this.lands = this.landsCollection.valueChanges();
    this.lands = this.landsCollection.snapshotChanges().map((actions) => {
      return actions.map((action) => {
        const data = action.payload.doc.data() as ILand;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
