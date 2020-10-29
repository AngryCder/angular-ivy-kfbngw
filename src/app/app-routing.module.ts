import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
const appRoutes: Routes = [
  { path: "", component: HelloComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
