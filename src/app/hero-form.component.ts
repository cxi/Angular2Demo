import {Component} from '@angular/core';
import { Hero} from './hero';

@Component({
    selector:'hero-form',
    templateUrl:'./hero-form.component.html'
})

export class HeroFormComponent{
      power =["Really Smart","Super Flexible","Super Hot",'Weather Changer'];

      model = new Hero(18,'Dr IQ',this.power[0],'Chunck Overstreet');

      submitted = false;

      onSubmit() { this.submitted = true; }

      // TODO: Remove this when we're done
      get diagnostic() { return JSON.stringify(this.model); }

}