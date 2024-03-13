import { Component } from '@angular/core';
import { json } from 'express';

@Component({
  selector: 'app-dark-mode-section',
  templateUrl: './dark-mode-section.component.html',
  styleUrl: './dark-mode-section.component.css'
})
export class DarkModeSectionComponent {
  isActivated: boolean = false;

  imgURL:string = "";
  
  ngOnInit(){
    if(localStorage.getItem("darkIsActivated") == "true"){
      this.isActivated = true;
    }else{
      this.isActivated = false
    }
    this.loadIconButton();
  }

  toggleDarkMode() {
    this.isActivated = !this.isActivated;
    this.saveValueToLocalStorage();

    this.loadIconButton();
  }

  saveValueToLocalStorage() {
    localStorage.setItem("darkIsActivated", this.isActivated.toString());
  }

  loadIconButton(){

    if(this.isActivated){
      this.imgURL = "../../assets/moon.png"
    } else {
      this.imgURL = "../../assets/sun.png"
    }
  }

}
