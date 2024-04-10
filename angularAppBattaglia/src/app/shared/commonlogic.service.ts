import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonlogicService {
commonWebName: string = 'Betacycle'
  constructor() { }

  CommonMethod()
  {
    alert("CIao");
  }
}
