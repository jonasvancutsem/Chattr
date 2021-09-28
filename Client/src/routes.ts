import {Routes} from '@angular/router'
import { RegisterComponent} from './app/register/register.component'
import {LoginComponent} from './app/login/login.component'

export const appRoutes :  Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    //{path: '', redirectTo: '/login', pathMatch:'full'},
];