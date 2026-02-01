import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  imports: [FormsModule, CommonModule],
  templateUrl: './tforms.component.html',
  styleUrl: './tforms.component.css'
})
export class TformsComponent {

  data=false;
  show=false;
  public mydata:any;
  addData(val:NgForm)
  {
    this.show=true;    
    
    this.mydata=val;
    
  }

  showData()
  {
    this.data=true;
    this.mydata;
  }

}
