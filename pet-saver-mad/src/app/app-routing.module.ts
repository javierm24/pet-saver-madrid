import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'chat-list', loadChildren: './chat-list/chat-list.module#ChatListPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'animal-list', loadChildren: './animal-list/animal-list.module#AnimalListPageModule' },
  { path: 'animal-form', loadChildren: './animal-form/animal-form.module#AnimalFormPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
