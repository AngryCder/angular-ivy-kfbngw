import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";
import { LoginModule } from "./login/login.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, LoginModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule {}
