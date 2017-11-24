import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IHouse } from '../models/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  private housesCollection: AngularFirestoreCollection<IHouse>;
  public houses: Observable<IHouse[]>;
  isLoading = true;
  storeys: number;
  beds: number;
  priceMin: number;
  priceMax: number;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    this.isLoading = true;
    this.housesCollection = this.afs.collection<IHouse>('houses', (ref) => {
      let query = ref.limit(50);
      if (this.storeys) {
        query = query.where('storeys', '==', this.storeys);
      }
      if (this.beds) {
        query = query.where('beds', '==', this.beds);
      }
      if (this.priceMin) {
        query = query.where('price', '>=', this.priceMin);
      }
      if (this.priceMax) {
        query = query.where('price', '<=', this.priceMax);
      }
      return query;
    });

    // this.houses = this.landCollection.valueChanges();
    this.houses = this.housesCollection.snapshotChanges().map((actions) => {
      return actions.map((action) => {
        const data = action.payload.doc.data() as IHouse;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
    this.houses.subscribe(() => this.isLoading = false);
  }
}
