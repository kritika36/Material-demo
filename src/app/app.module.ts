import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,FormControl } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatComponentsModule,
  ],
  providers: [
    CourseService,
    {provide:CourseService,useClass: CourseService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
