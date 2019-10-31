import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagagerieComponent } from './components/frames/bagagerie/bagagerie.component';

const routes: Routes = [
  { path: '', component: BagagerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
