import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'how-to'},
  { path: 'how-to', component: HowToComponent},
  { path: 'examples', component: ExamplesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
