import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./app.component.css']
})
export class ContactComponent {
  // title = 'my-app';
  @Input("contact-info") action : string;
//  action = 'contact';



}
