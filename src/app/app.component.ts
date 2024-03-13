import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calc-operations-with-two-numbers';

  dataLocalStorage: string | null = null;
  classes: any = ['container'];

  timerDarkMode = setInterval(() => this.getDarkModeData(), 1000);

  getDarkModeData(){
    this.dataLocalStorage = localStorage.getItem('darkIsActivated');
    console.log(this.dataLocalStorage)
    if(this.dataLocalStorage == "true"){
      this.classes = ['container', 'dark'];
    } else {
      this.classes = ['container'];
    }
  }
}
