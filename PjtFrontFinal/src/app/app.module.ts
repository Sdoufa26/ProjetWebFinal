import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common'; 
import { MissionsComponent } from './missions/missions.component';
import { PersonnelRecommendationComponent} from './personnel-recommendation/personnel-recommendation.component';
import { PersonnelModalComponent } from './personnel-modal/personnel-modal.component';
import { ForumComponent } from './forum/forum.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CompetencesModalPersonnelComponent } from './competences-modal-personnel/competences-modal-personnel.component';
import { CompetencesModalMissionComponent } from './competences-modal-mission/competences-modal-mission.component';    

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PersonnelComponent,
    MissionsComponent, 
    PersonnelRecommendationComponent, 
    PersonnelModalComponent, 
    ForumComponent, 
    RegisterComponent, 
    LoginComponent, CompetencesModalPersonnelComponent, CompetencesModalMissionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }