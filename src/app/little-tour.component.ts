import { Component } from '@angular/core';

@Component({
    selector:'litter-tour',
    template:`
    <ul>
        <li *ngFor = "let hero of heros">{{hero}}
    </ul>
    <input #addedHero (keyup.enter)="addHero(addedHero.value)"
    (blur) = "addHero(addedHero.value); addedHero.value = ''">
    <button (click) ="addHero(addedHero.value)">add</button>
    `
})

export class LittleTourComponent{
    heros = ["Superman","X-man","Batman"];
    addHero (newHero: string){
        if(newHero){
            this.heros.push(newHero);
        }
        console.log(this.heros);
    }
}