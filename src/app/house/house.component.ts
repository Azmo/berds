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

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.housesCollection = this.afs.collection<IHouse>('houses');
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
