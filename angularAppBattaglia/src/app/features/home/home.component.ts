import { Component, EventEmitter, Input,Output } from '@angular/core';
import { CommonlogicService } from '../../shared/commonlogic.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <p>
      home works! {{newName}}
    </p>
    <button (click)="myLogic.CommonMethod()">Service</button>
  `,
  styles: ``
})
export class HomeComponent {
  @Input() newName: string=''
  @Output() fromChild = new EventEmitter<string>();
  
webname: string ='';

constructor (public myLogic: CommonlogicService)
{
  this.webname = myLogic.commonWebName;
  myLogic.commonWebName = "Microsoft";
}

}
