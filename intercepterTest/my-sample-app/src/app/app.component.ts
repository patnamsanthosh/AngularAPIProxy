import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-sample-app';
  constructor(private sampleService: SampleService) {}

  ngOnInit(): void {
     this.sampleService.getHeroes().subscribe(a => {
       console.log(a);
     });
  }
}
