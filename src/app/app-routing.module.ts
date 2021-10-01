import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mycomponents/about/about.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { PagenotfoundComponent } from './mycomponents/pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './mycomponents/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'myprojects', component: ProjectsComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
