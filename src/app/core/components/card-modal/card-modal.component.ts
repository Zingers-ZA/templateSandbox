import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../../modules/shared/shared.module'
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
  encapsulation: ViewEncapsulation.None // Allow styles in this component to overwrite default styles
})
export class CardModalComponent implements OnInit {

  public rating = null;

  public contextKeys = [];

  public unitsMap = {
    "cloudCover": "%",
    "rain": "mm",
    "rain12h" : "mm",
    "windHigh": "knts",
    "windAvg": "knts",
    "temperature": "deg.",
    "waveSize": "ft",
    "wavePeriod": "s"
}

  constructor(
    public dialogRef: MatDialogRef<CardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.rating = data;
    this.getContextKeys();
  }

  ngOnInit(): void {
  }

  getContextKeys(){
    for (let key of Object.keys(this.rating.context.idvRatings)){
      if (this.rating.context.idvRatings[key].Description != "No context"){
        this.contextKeys.push(key)
      }
    }
  }

  getSentenceCase(text) {
    var result = text.replace( /([A-Z])/g, " $1" );
    var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

  getColor() { 
    if (this.rating.rating > 0.7 ) {
      return "good"
    } else if (this.rating.rating > 0.3 ) {
      return "ok"
    } else {
      return "bad"
    }
  }

  getRatingText(rating) {
    if (rating > 0.7) {
      return "It's looking quite good! Here's why:"
    } else if (rating > 0.3 ) {
      return "The conditions might be average. Here's why:"
    } else {
      return "It's not looking great. Here's why:"
    }
  }

  close() {
    this.dialogRef.close();
  }

}
