import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  categories = ['Men', 'Women', 'Kids'];


  constructor(private router:Router)
  {
      
  }
  homeVariable:boolean=false;
  goToHome()
  {
    this.homeVariable=true;

  }

  goToLogin()
  {
    this.router.navigate(['/login'])
  }

 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
