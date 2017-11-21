import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-finishing-item',
  templateUrl: './finishing-item.component.html',
  styleUrls: ['./finishing-item.component.css'],
})
export class FinishingItemComponent implements OnInit {
  public finishDocument: AngularFirestoreDocument<any>;
  public finish: Observable<any>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.finishDocument = this.afs.collection<any>('finish').doc('estimated');
    this.finish = this.finishDocument.valueChanges();
  }

}
