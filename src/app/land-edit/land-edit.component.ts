import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ILand } from '../models/land';

@Component({
  selector: 'app-land-edit',
  templateUrl: './land-edit.component.html',
  styleUrls: ['./land-edit.component.css'],
})
export class LandEditComponent implements OnInit {
  private landsCollection: AngularFirestoreCollection<ILand>;
  public landDocument: AngularFirestoreDocument<ILand>;
  public land: Observable<ILand>;

  isLoading = true;

  constructor(private afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.landsCollection = this.afs.collection<ILand>('lands');
    if (id === 'new') {
      this.isLoading = false;
      this.landsCollection.add({
        address: null,
        bal: null,
        developer: null,
        estate: null,
        fencing: false,
        frontLandscaping: false,
        length: null,
        noise: false,
        price: null,
        pricePerSqm: null,
        rearLandscaping: false,
        siteClass: null,
        size: null,
        title: false,
        width: null,
      }).then((doc) => {
        this.landDocument = this.landsCollection.doc(doc.id);
        this.land = this.landDocument.valueChanges();
      });
    } else {
      this.landDocument = this.landsCollection.doc(id);
      this.land = this.landDocument.valueChanges();
      this.land.subscribe(() => this.isLoading = false);
    }
  }

  delete() {
    this.landDocument.delete();
  }
}
