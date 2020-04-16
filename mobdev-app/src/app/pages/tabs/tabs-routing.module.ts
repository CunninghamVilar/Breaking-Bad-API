import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          }
        ]
      },
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          }
        ]
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/episodes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
