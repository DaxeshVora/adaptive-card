import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdaptiveTestComponent } from './adaptive-test/adaptive-test.component';


const routes: Routes = [
  { path: 'test', component: AdaptiveTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
