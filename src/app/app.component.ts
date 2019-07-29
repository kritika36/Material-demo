import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import {timer} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private dialog:MatDialog) {}

   openDialog(){
     this.dialog.open(EditCourseComponent,{
       data: {courseId : 1}
     })
     .afterClosed()
     .subscribe(result=> console.log(result));
   }

   
 }
 
 
 
 
 
 
 
 
 
 
 
 

 
  // isLoading =false;

  // constructor() {
  //   this.isLoading=true;
  // this.getCourses()
  // .subscribe(x => this.isLoading= false);

  // }

  // getCourses() {
  //   return timer(2000);
  // }
  // }














//  categories=[
//    {name : 'Beginner'},
//    {name : 'Intermediate'},
//    {name : 'Advanced'},
//  ];

//  setectCategory(category){
//    this.categories
//    .filter(c=> c != category)
//    .forEach(c=> c['selected'] = false)

//    category.selected= ! category.selected;
//  
