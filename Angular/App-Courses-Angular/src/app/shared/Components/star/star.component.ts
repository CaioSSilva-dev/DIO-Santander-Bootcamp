import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'course-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    @Input()
    rating: number = 0;

    StarWidth: number;
    
    ngOnChanges(): void {
        this.StarWidth = this.rating * 74 / 5
    }
}