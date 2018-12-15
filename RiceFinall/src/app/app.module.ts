import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ContentComponent } from './shared/component/content/content.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeshowComponent } from './homeshow/homeshow.component';
import { CrateRiceComponent } from './homeshow/crate-rice/crate-rice.component';
import { MenuComponent } from './shared/component/content/menu/menu.component';
import { EditRiceComponent } from './homeshow/edit-rice/edit-rice.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    HomeshowComponent,
    CrateRiceComponent,
    MenuComponent,
    EditRiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
