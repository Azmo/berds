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
  isLoading = true;
  private landsCollection: AngularFirestoreCollection<ILand>;
  public lands: Observable<ILand[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    this.isLoading = true;
    this.landsCollection = this.afs.collection<ILand>('lands', (ref) => {
      let query = ref.limit(50);
      if (this.priceMin) {
        query = query.where('price', '>=', this.priceMin);
      }
      if (this.priceMax) {
        query = query.where('price', '<=', this.priceMax);
      }
      return query;
    });

    // this.lands = this.landsCollection.valueChanges();
    this.lands = this.landsCollection.snapshotChanges().map((actions) => {
      return actions.map((action) => {
        const data = action.payload.doc.data() as ILand;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });

    this.lands.subscribe(() => this.isLoading = false);
  }
}
