import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { charactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: charactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
