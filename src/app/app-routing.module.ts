import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginModule } from "./login/login.module";
import { Routes, RouterModule } from "@angular/router";
const appRoutes: Routes = [
  { path: "", component: HelloComponent },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
