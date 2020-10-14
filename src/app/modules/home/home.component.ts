import { Component, OnInit } from '@angular/core'
import { HomeModule } from './home.module'
import { CardModalComponent } from '../../core/components/card-modal/card-modal.component'
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public ratings: any;
    public dialogRef = null;

    constructor(
        private dialog: MatDialog
    ) {
        this.getCards()
    }

    ngOnInit(): void {
    }

    public toggleDialog(rating) {
        this.openDialog(rating)
    }

    public openDialog(rating) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = rating;

        this.dialogRef = this.dialog.open(CardModalComponent, dialogConfig);

        this.dialogRef.afterClosed().subscribe(result => {
            console.log("closed")
        })
    }

    public getCards() {

        this.ratings = [
            {
                "context": {
                    "idvRatings": {
                        "cloudCover": {
                            "Description": "Sky looks clear!",
                            "ratingNormalised": 0.2,
                            "ratingWeighted": -0.06,
                            "value": 20.0
                        },
                        "rain": {
                            "Description": "No rain baby",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "rain12h": {
                            "Description": "No context",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "temperature": {
                            "Description": "Warm day today",
                            "ratingNormalised": 0.71,
                            "ratingWeighted": 0.142,
                            "value": 15.65
                        },
                        "waveSize": {
                            "Description": "Small kickers right now",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": 0.0,
                            "value": 3.0
                        },
                        "windAvg": {
                            "Description": "No context",
                            "ratingNormalised": 0.6199999999999999,
                            "ratingWeighted": 0.18599999999999997,
                            "value": 16.2
                        },
                        "windHigh": {
                            "Description": "It's winnnndy! Send it",
                            "ratingNormalised": 0.7000000000000002,
                            "ratingWeighted": 0.2800000000000001,
                            "value": 21.1
                        }
                    },
                    "summary": "In Cape Town more wind is always better. We're aiming for warm weather, clear skies and good kickers!"
                },
                "name": "Kiting",
                "rating": 0.548
            },
            {
                "context": {
                    "idvRatings": {
                        "cloudCover": {
                            "Description": "Clear skies baby!",
                            "ratingNormalised": 0.2,
                            "ratingWeighted": -0.1,
                            "value": 20.0
                        },
                        "rain": {
                            "Description": "No rain",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "rain12h": {
                            "Description": "No context",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "temperature": {
                            "Description": "It's Warm",
                            "ratingNormalised": 1,
                            "ratingWeighted": 0.2,
                            "value": 15.65
                        },
                        "wavePeriod": {
                            "Description": "Period looks spot on",
                            "ratingNormalised": 1,
                            "ratingWeighted": 0.1,
                            "value": 11.0
                        },
                        "waveSize": {
                            "Description": "Might not be great",
                            "ratingNormalised": 0.19999999999999996,
                            "ratingWeighted": 0.07999999999999999,
                            "value": 3.0
                        },
                        "windHigh": {
                            "Description": "Water will be chopppy",
                            "ratingNormalised": 0,
                            "ratingWeighted": 0.0,
                            "value": 21.1
                        }
                    },
                    "summary": "Most of the West Coast of Cape Town works best in 4-10ft low-tide conditions. We are also aiming for clear skies with zero wind"
                },
                "name": "Surfing",
                "rating": 0.28
            },
            {
                "context": {
                    "idvRatings": {
                        "cloudCover": {
                            "Description": "Clear skies, perfect!",
                            "ratingNormalised": 0.2,
                            "ratingWeighted": -0.1,
                            "value": 20.0
                        },
                        "rain": {
                            "Description": "No rain",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "rain12h": {
                            "Description": "No rain in the last 12h",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "temperature": {
                            "Description": "Low temps, friction should be good!",
                            "ratingNormalised": 1,
                            "ratingWeighted": 1,
                            "value": 15.65
                        },
                        "windAvg": {
                            "Description": "No context",
                            "ratingNormalised": 0.32,
                            "ratingWeighted": -0.032,
                            "value": 16.2
                        },
                        "windHigh": {
                            "Description": "Might be a little breezy",
                            "ratingNormalised": 0.46,
                            "ratingWeighted": -0.046000000000000006,
                            "value": 21.1
                        }
                    },
                    "summary": "Low temperatures usually provide more friction, and are more desirable than warm conditions. At the same time, clear skies are ideal as rain quite obviously ruins climbing ability"
                },
                "name": "Climbing",
                "rating": 0.822
            },
            {
                "context": {
                    "idvRatings": {
                        "cloudCover": {
                            "Description": "No context",
                            "ratingNormalised": 0.2,
                            "ratingWeighted": -0.04000000000000001,
                            "value": 20.0
                        },
                        "rain": {
                            "Description": "No context",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "rain12h": {
                            "Description": "No context",
                            "ratingNormalised": 0.0,
                            "ratingWeighted": -0.0,
                            "value": 0.0
                        },
                        "temperature": {
                            "Description": "No context",
                            "ratingNormalised": 0.9611111111111111,
                            "ratingWeighted": 0.9611111111111111,
                            "value": 15.65
                        },
                        "windHigh": {
                            "Description": "No context",
                            "ratingNormalised": 0.46,
                            "ratingWeighted": -0.18400000000000002,
                            "value": 21.1
                        }
                    },
                    "summary": "No Summary"
                },
                "name": "Cycling",
                "rating": 0.737111111111111
            }
        ]
    }

    public getSvgLocation(name) {
        var svgLocationMap = {
            "Kiting": "../../../../assets/kite.svg",
            "Surfing": "../../../../assets/surfing.svg",
            "Climbing": "../../../../assets/climbing.svg",
            "Cycling": "../../../../assets/cycling.svg"
        }

        return svgLocationMap[name]
    }

    public getCardColor(rating) {
        if (rating > 0.7) {
            return "good"
        } else if (rating > 0.3) {
            return "ok"
        } else {
            return "bad"
        }
    }

    public getStars(rating) {
        var arr = []
        for (var i = 0; i < Math.round(rating * 5); i++){
            arr.push(i)
        }
        return arr
    }
}
