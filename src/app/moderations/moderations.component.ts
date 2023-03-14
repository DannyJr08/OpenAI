import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations/moderations.service';

export interface Categories {
  hate: boolean,
  hate_threatening: boolean,
  self_harm: boolean,
  sexual: boolean,
  sexual_minors: boolean,
  violence: boolean,
  violence_graphic: boolean
  llamada: boolean
}

@Component({
  selector: 'app-textdavinci003',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit {
  constructor(private moderations : ModerationsService) {}

  ngOnInit(): void {
  }

  result: Categories = {
    hate: false,
    hate_threatening: false,
    self_harm: false,
    sexual: false,
    sexual_minors: false,
    violence: false,
    violence_graphic: false,
    llamada: false
  };
  input: string = "";

  postCompletition() {
      var payload = {
        input: this.input,
      }

      this.moderations.postCompletion(payload)
      .subscribe((data: any) => {
        // alert(JSON.stringify(data));
        console.log(data);
        this.result.hate = data.results[0].categories.hate;
        this.result.hate_threatening = data.results[0].categories.hate;
        this.result.self_harm = data.results[0].categories.hate;
        this.result.sexual = data.results[0].categories.sexual;
        this.result.sexual_minors = data.results[0].categories.sexual;
        this.result.violence = data.results[0].categories.violence;
        this.result.violence_graphic = data.results[0].categories.violence;
        this.result.llamada = true;
      });
  }
}
