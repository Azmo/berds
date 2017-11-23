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
      this.landsCollection.add({
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
      }).then((doc) => {
        this.landDocument = this.landsCollection.doc(doc.id);
        this.land = this.landDocument.valueChanges();
      });
    } else {
      this.landDocument = this.landsCollection.doc(id);
      this.land = this.landDocument.valueChanges();
    }
    this.land.subscribe(() => this.isLoading = false);
  }

  delete() {
    this.landDocument.delete();
  }
}
