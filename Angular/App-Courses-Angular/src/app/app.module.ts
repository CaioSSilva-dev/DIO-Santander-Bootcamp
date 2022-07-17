import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './core/Components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './404/error.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/Components/nav-bar/core.module';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path:'**', component: ErrorComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
