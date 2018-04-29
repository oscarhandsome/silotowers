import {Http} from "@angular/http";

export class TowerService{

    // constructor(private http:Http){
    //
    // }
    //
    // getTowers(){
    //     return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,&results=8&nat=gb﻿')
    // }

    public minValue: number = 0;

    public maxValue: number = 445;

    public value: number;

    towers = [
        {
            id: '1',
            title: 'Уровень карналита в силосной башне №',
            mass: '1065',
            value: 98
        },
        {
            id: '2',
            title: 'Уровень карналита в силосной башне №',
            mass: '998',
            value: 60
        },
        {
            id: '3',
            title: 'Уровень карналита в силосной башне №',
            mass: '578',
            value: 38
        },
        {
            id: '4',
            title: 'Уровень карналита в силосной башне №',
            mass: '967',
            value: 79
        },
        {
            id: '5',
            title: 'Уровень карналита в силосной башне №',
            mass: '1365',
            value: 99
        },
        {
            id: '6',
            title: 'Уровень карналита в силосной башне №',
            mass: '1143',
            value: 60
        },
        {
            id: '7',
            title: 'Уровень карналита в силосной башне №',
            mass: '856',
            value: 51
        },
        {
            id: '8',
            title: 'Уровень карналита в силосной башне №',
            mass: '956',
            value: 60
        }
    ];

}
