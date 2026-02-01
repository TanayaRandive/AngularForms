import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TformsComponent } from './tforms/tforms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, TformsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
  userDetails: any;
  addDetails(val:NgForm)
  {
    console.log(val);
    this.userDetails=val;
  }


}
