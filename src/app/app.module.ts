import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './header/about/about.component';
import { ProductComponent } from './header/product/product.component';
import { ContactComponent } from './header/contact/contact.component';
import { AppService } from './service/app.service';
import { AppMockService } from './service/app-mock.service';
import { AppMockBackService } from './service/app-mock-back.service';
import { AppJsonService } from './service/app-json.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    HeaderComponent,
    SidenavComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ { provide: AppService, useClass: AppJsonService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
