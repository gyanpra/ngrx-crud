import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthEffects } from "./authstate/auth.effects";
import { AuthReducer } from "./authstate/auth.reducer";
import { AUTH_STATE_NAME } from "./authstate/auth.selector";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const route: Routes = [
    {
      path: 'auth',
      children: [

        {
          path: 'login',
          component: LoginComponent,
        },
        {
          path: 'register',
          component: SignupComponent,
        },
      ],
    },
  ];
    
    @NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, EffectsModule.forFeature(), RouterModule.forChild(route), StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),HttpClientModule],
    })
    export class AuthModule {}


