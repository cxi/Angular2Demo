import {Component} from '@angular/core';
@Component({})
export class Hero{
    constructor(public id:number, public name:string,public power:string,public alterEgo?:string){

    }
}