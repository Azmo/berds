import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { IHouse } from '../models/house';

@Component({
  selector: 'app-house-edit',
  templateUrl: './house-edit.component.html',
  styleUrls: ['./house-edit.component.css'],
})
export class HouseEditComponent implements OnInit {
  private housesCollection: AngularFirestoreCollection<IHouse>;
  public houseDocument: AngularFirestoreDocument<IHouse>;
  public house: Observable<IHouse>;
  isLoading = true;

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.housesCollection = this.afs.collection<IHouse>('houses');
    if (id === 'new') {
      this.isLoading = false;
      this.housesCollection.add({
        baths: null,
        beds: null,
        blindsLength: null,
        builder: null,
        carpetsArea: null,
        livingArea: null,
        minLotLength: null,
        minLotWidth: null,
        name: null,
        paintingArea: null,
        parking: null,
        price: null,
        size: null,
        storeys: 1,
        tilesArea: null,
      }).then((doc) => {
        this.houseDocument = this.housesCollection.doc(doc.id);
        this.house = this.houseDocument.valueChanges();
      });
    } else {
      this.houseDocument = this.housesCollection.doc(id);
      this.house = this.houseDocument.valueChanges();
      this.house.subscribe(() => this.isLoading = false);
    }
  }

  delete() {
    this.houseDocument.delete();
  }
}
