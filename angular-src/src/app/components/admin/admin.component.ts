import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    //private authService: AuthService,
    
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onLoginSubmit() {
    
    if(this.username == 'Admin' && this.password == 'a') {
          
          this.flashMessage.show('You are now logged in', {cssClass: 'alert-success', timeout: 5000});
          this.router.navigate([`admindashboard`]);
        } else {
          
          this.router.navigate(['admin']);
        }
      }
    }
