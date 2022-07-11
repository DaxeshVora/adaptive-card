import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdaptiveTestComponent } from './adaptive-test/adaptive-test.component';
import { FluentExampleComponent } from './fluent-example/fluent-example.component';


const routes: Routes = [
  { path: 'test', component: AdaptiveTestComponent },
  { path: 'fluent-example', component: FluentExampleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
