import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  action= null;
  constructor(private appService :AppService) {

  }
  ngOnInit() {
    this.appService.getNavObs().subscribe(data => {
      this.action = data;
    })
  }
}
