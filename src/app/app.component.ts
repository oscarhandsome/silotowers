import {Component, Directive, ElementRef, Input, Renderer} from '@angular/core';
import {TowerService} from "./tower/tower.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [TowerService]
})

export class AppComponent {
    towers = [];

    constructor(public towerService: TowerService){
        this.towers = this.towerService.towers;

        // console.log(towerService.maxValue);
        // let height:number;
        // let numbers = towerService.towers;
        // let result = [];
        // for (let num of numbers) {
        //     console.log(num.value);
        //     height = towerService.maxValue/100*num.value;
        //     console.log('height  = '+ height);
        //     result.push(height);
        // }
        // console.log(result);
    }

    ngOnInit (){
        // this.towers = this.towerService.towers;
        // this.towerService.getTowers().subscribe( towers => {
        //     console.log(towers);
        // })
    }
}

@Directive({ selector: '[leveltop]' })

export class LevelTopDirective {

    constructor(renderer: Renderer, el: ElementRef, towerService: TowerService){
        var value:number = Math.floor(Math.random() * 445) + 1  ;
        renderer.setElementStyle(el.nativeElement, 'height', value +'px');
        // console.log(towerService);
    }
}

//from task
class Indicator {
    public id: string;
    public title: string;
    public value: number;
    public minValue: number = 0;
    public maxValue: number = 445;
}