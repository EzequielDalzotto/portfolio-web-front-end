import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { TokenService } from "./token.service";
import { inject } from "@angular/core";


export const canActivateTeam: CanActivateFn = 
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const router = inject(Router)
        if (inject(TokenService).getAuthorities().includes("ROLE_ADMIN")){
            return true;
        }else{
            router.navigate(['/login']);
            return false;
        }
    };