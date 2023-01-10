import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, finalize } from 'rxjs/operators';
import { ApiService } from '../services/ApiService';
import { states } from '../../.common/constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasNoticeNumber: boolean = true;
  showLicenceEroor: boolean = false;
  showStateError: boolean = false;
  noticeNumberError: boolean = false;
  showModal: boolean = false;
  ValidLicenceNumber = false;
  @Output() btnAction = new EventEmitter<string>();
  ValidnoticeNumberError: boolean = false;

  states = states

  constructor(private apiService: ApiService) { }

  postformData = {
    'NoticeNumber': "",
    'LicensePlate': "",
    'LP_State': ""
  };

  noticeNumber: string = "";
  licencePlate: string = ""

  ngOnInit(): void {
  }
  searchViolations() {
    if (this.hasNoticeNumber) {
      this.openModal();
      return;
    }
    this.postformData.LicensePlate = this.licencePlate;
    if (this.noticeNumber) {

      this.licencePlate = "";

      this.postformData.LP_State = "TX";
      this.postformData.LicensePlate = "JDV4001";
      this.postformData.NoticeNumber = this.noticeNumber;


      this.apiService.AuthRequest(this.postformData).pipe(
        catchError((error) => {
          if (error) {
            this.ValidnoticeNumberError = true;
          }

          return Of(error)

        }),
        finalize(() => {

        })).
        subscribe((response) => {
          this.apiService.setAuth(response);
          let accountId = this.apiService.authData.AccountGuid;
          this.btnAction.emit(response);

        });
    } else {
      if (!this.hasNoticeNumber) {
        this.noticeNumber = "";

        if (this.postformData.LicensePlate) {
          this.showLicenceEroor = false;
          if (this.postformData.LP_State) {
            this.showStateError = false;
            this.postformData.NoticeNumber = "S910000705453";
            this.apiService.AuthRequest(this.postformData).pipe(
              catchError((error) => {
                if (error) {
                  this.ValidLicenceNumber = true;
                }

                return Of(error)

              }),
              finalize(() => {

              })).
              subscribe((response) => {
                this.apiService.setAuth(response);
                let accountId = this.apiService.authData.AccountGuid;
                this.btnAction.emit(response);

              });
          }
          else {
            this.showStateError = true
          }

        } else {
          this.showLicenceEroor = true;
        }
      }
      else {
        this.noticeNumberError = true;
      }


    }

  }
  onSelectedChangeState(dataDropdown: any) {
    this.postformData.LP_State = dataDropdown.target.value;
  }

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }

}
function Of(error: any): any {
  throw new Error('Function not implemented.');
}

