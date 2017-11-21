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

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.housesCollection = this.afs.collection<IHouse>('houses');
    if (id === 'new') {
      this.housesCollection.add({
        baths: 0,
        beds: 0,
        blindsLength: 0,
        builder: '',
        carpetsArea: 0,
        livingArea: 0,
        minLOtLength: 0,
        minLotWidth: 0,
        name: '',
        paintingArea: 0,
        parking: 0,
        price: 0,
        size: 0,
        storeys: 1,
        tilesArea: 0,
      }).then((doc) => {
        this.houseDocument = this.housesCollection.doc(doc.id);
        this.house = this.houseDocument.valueChanges();
      },
      );

    } else {
      this.houseDocument = this.housesCollection.doc(id);
      this.house = this.houseDocument.valueChanges();

    }
  }

  delete() {
    this.houseDocument.delete();
  }
}
