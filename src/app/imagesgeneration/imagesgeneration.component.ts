import { Component } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent {
  constructor(private imagesgeneration : ImagesgenerationService) {}

  ngOnInit(): void {
  }

  result: string = "";
  myprompt: string = "";

  postCompletition() {
      var payload = {
        prompt: this.myprompt,
        n: 1,
        size: "1024x1024"
      }

      this.imagesgeneration.postCompletion(payload)
      .subscribe((data: any) => {
        //alert(JSON.stringify(data));
        console.log(data);
        this.result = data.data[0].url;
      });
  }
}
