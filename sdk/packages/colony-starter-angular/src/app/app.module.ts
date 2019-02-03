import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSnackBarModule, MatToolbarModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatSnackBarModule,
  ],
  providers: [AppService],
})

export class AppModule { }
