import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { SharedDataService } from './shared-data.service';
import { ContainerComponent } from './container.component';
import { DataContainerComponent } from './Container/data-container.component';
import { DataSubscriber1Component } from './Container/data-subscriber1.component';
import { DataSubscriber2Component } from './Container/data-subscriber2.component';
import { SubjectDataService } from './subject-data.service';
import { SessionDataService } from './session-data.service';
import { AppDataService } from './Services/app-data.service';
import { LayoutComponent } from './component/layout.component';
import { Block1Component } from './component/block1.component';
import { HttpClientModule } from '@angular/common/http';
import { SampleDataService } from './Services/sample-data.service';
import { Block2Component } from './component/block2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child1Component,
    ContainerComponent,
    DataContainerComponent,
    DataSubscriber1Component,
    DataSubscriber2Component,
    LayoutComponent,
    Block1Component,
    Block2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'child1',
        component:Child1Component
      },
      {
        path:'next',
        component:ContainerComponent
      },
      {
        path:'datacontainer',
        component:DataContainerComponent
      },
      {
        path:'layout',
        component:LayoutComponent
      }
    ])
  ],
  providers: [SharedDataService,SubjectDataService,SessionDataService,AppDataService,SampleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
