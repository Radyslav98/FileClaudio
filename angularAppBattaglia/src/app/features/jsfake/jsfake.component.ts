import { Component } from '@angular/core';
import { HttprequestService } from '../../shared/services/httprequest.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jsfake',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './jsfake.component.html',
  styleUrl: './jsfake.component.css'
})
export class JsfakeComponent {
  jsFakePosts: any[]=[]
  jsSinglePost:any

  constructor(private mainHttp: HttprequestService)
  {
    mainHttp.GetJsFakePosts()
    .subscribe({
      next: (jsData: any) => {
        this.jsFakePosts = jsData
      },
      error: (erreur: any) => {
        console.log(erreur)
      }
    })
  }

  GetPostByTitle()
  {
    this.mainHttp.GetJsFakePostByTitle(27)
    .subscribe({
      next: (jsData: any) => {
        this.jsSinglePost = jsData
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
}
