import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModelService } from './services/api/models/model.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModelsDetailsComponent } from './models-details/models-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms'; 
import { MatDialogModule,MatDialog } from '@angular/material/dialog'; 
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    ModelsDetailsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MatDialogModule,
    MdbModalModule,
    
    
    
  ],
  providers: [HttpClient,ModelService,
  
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
