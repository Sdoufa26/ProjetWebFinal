import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CompetencesModalComponent } from '../competences-modal/competences-modal.component';

@Component({
  selector: 'app-missions',
  standalone: false,
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  missionsArray: any[] = [];
  isResultloaded = false;
  isUpdateFormActive = false;
  bsModalRef?: BsModalRef;

  nomM = "";
  descriptionM = "";
  dateDebutM = "";
  dateFinM = "";
  anomalieM = "";

  constructor(private missionsService: MissionsService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions() {
    this.missionsService.getMissions().subscribe({
      next: (resultData) => {
        this.isResultloaded = true;
        this.missionsArray = resultData;
      },
      error: (err) => {
        console.error("Error fetching missions:", err);
        alert("Failed to fetch missions. Please try again.");
      }
    });
  }

  save() {
    const missionData = {
      nomM: this.nomM,
      descriptionM: this.descriptionM,
      dateDebutM: this.dateDebutM,
      dateFinM: this.dateFinM,
      statutM: 'en préparation',
      anomalieM: this.anomalieM
    };

    this.missionsService.addMission(missionData).subscribe({
      next: () => {
        alert("Mission Registered Successfully");
        this.getMissions();
      },
      error: (err) => {
        console.error("Error registering mission:", err);
        alert("Failed to register mission. Please try again.");
      }
    });
  }

  setDelete(mission: any) {
    if (!mission.idM) {
      alert("Invalid mission ID");
      return;
    }

    this.missionsService.deleteMission(mission.idM).subscribe({
      next: () => {
        alert("Mission Deleted Successfully");
        this.missionsArray = this.missionsArray.filter(m => m.idM !== mission.idM);
      },
      error: (err) => {
        console.error("Error deleting mission:", err);
        alert("Failed to delete mission. Please try again.");
      }
    });
  }

  openCompetencesModal(mission: any) {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        mission: mission
      }
    };
    this.bsModalRef = this.modalService.show(CompetencesModalComponent, modalOptions);
  }
}