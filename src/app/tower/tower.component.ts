import {Component, Directive, Input, Renderer, ElementRef} from '@angular/core';
import {TowerService} from "./tower.service";

@Component({
    selector: 'app-tower',
    templateUrl: './tower.component.html',
    styleUrls: ['./tower.component.scss']
})

export class TowerComponent {

    @Input () title;
    @Input () mass;
    @Input () value;
    @Input () minValue;
    @Input () maxValue;

    inValue = false;

}
