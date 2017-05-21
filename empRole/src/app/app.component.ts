import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   public EmpList : any = [

     {name :'Gaurav', role:'Admin'},
     {name :'Rahul', role:'Admin'},
     {name :'Raj', role:'Member'},
     {name :'Sam', role:'Superviser'},
     {name :'Derek', role:'Member'},
     {name :'David', role:'SuperAdmin'},
     {name :'Heisenberg', role:'Admin'},
     {name :'Leo', role:'Member'},
     {name :'Daniel', role:'Admin'},
     {name :'Tedd', role:'SuperAdmin'},
     {name :'Joey', role:'Member'},
     {name :'Chandler', role:'Superviser'},
   ]

   role1=" ";
   role2=" ";
   role3=" ";
   role4=" ";
   clickedAdmin(){
     this.role1= "Admin";
   }

   clickedMember(){
     this.role2= "Member";
   }

   clickedSuperAdmin(){
     this.role3= "SuperAdmin";
   }

   clickedSuperviser(){
     this.role4= "Superviser";
   }

}
