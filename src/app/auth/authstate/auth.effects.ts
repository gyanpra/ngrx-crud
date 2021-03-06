import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";


@Injectable()

export class AuthEffects {

    constructor(private action$:Actions, private authService: AuthService) { }

    login$ = createEffect(() => {
        return this.action$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data) => {
                return loginSuccess();
              })
            );
            })
        );
    });
}

