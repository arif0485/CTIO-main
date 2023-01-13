import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/ApiService';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-violations',
  templateUrl: './violations.component.html',
  styleUrls: ['./violations.component.scss']
})
export class ViolationsComponent implements OnInit {
  paymentText = "";
  disputeLinkText = "Or dispute one or more Civil Penalties";
  violations: any = [];
  totalAmount = 0;
  InitialTotal = 0;
  caluculationAmount: number = 0;
  showModal: boolean = false;
  showFeedbackModal: boolean = false;
  showSuccessModal: boolean = false;
  showPaymentModal: boolean = false;
  srcofimage: string | undefined;
  showDisputes: boolean = false;
  showHearing: boolean = false;
  disputeReasonSelected: string = '';
  noticeNumber = '';
  licensePlateNumber = '';
  showViolations: boolean = false;
  isSelected: boolean = false;
  constructor(private apiService: ApiService, private _decimalPipe: DecimalPipe) { }
  postformData = {
    'NoticeNumber': "S910000705453",
    'LicensePlate': "JDV4001",
    'LP_State': "TX"
  };
  ngOnInit(): void {
    this.violations = violationsData;
  }
  onChangeDispute(reason: any) {
    this.disputeReasonSelected = reason;
  }
  disputeAction(type: any) {
    if (type === 'cancel') {
      this.showDisputes = false;
      this.disputeReasonSelected = '';
      this.caluculationAmount = 0;
      this.paymentText = "Pay $" + 0 + " for all outstanding Civil Penalties";
    }
  }
  hearingAction(type: any) {
    if (type === 'cancel') {
      this.showHearing = false;
    }
    if (type === 'submit') {
      this.showHearing = false;
      this.showFeedbackModal = true;
    }
  }
  diputeclick() {
    this.showDisputes = true;
    this.showHearing = false;
    this.isSelected = false;
    this.showViolations = true;
    let accountId = this.apiService.authData.AccountGuid;
    this.apiService.getViolationsByAccountGuid(accountId).subscribe((response) => {
      this.violations = [];
      this.violations = response.Violations;
      this.violations = violationsData;
      if (this.violations.Violations) {
        for (let index = 0; index < this.violations.Violations.length; index++) {
          this.violations.Violations[index].noticeDetailData = [];
          this.violations.Violations[index].noticeDetailToggle = false;
        }
      }
      this.totalAmount = 0;
      this.caluculationAmount = 0;
      console.log(response);
      this.showViolations = true;
    });
  }
  requestHearing(){
    this.showDisputes = false;
    this.showHearing = true;
  }
  searchViolations(value: any) {
    if (value) {
      if (this.apiService.authData?.AccountGuid) {
        let accountId = this.apiService.authData.AccountGuid;
        this.apiService.getViolationsByAccountGuid(accountId).subscribe((response) => {
          this.violations = response.Violations;
          this.totalAmount = response.TotalAmount;
          this.violations = violationsData;
          this.totalAmount = 600;
          if (this.violations.Violations) {
            for (let index = 0; index < this.violations.Violations.length; index++) {
              this.violations.Violations[index].noticeDetailData = [];
              this.violations.Violations[index].noticeDetailToggle = false;
            }
          }
          console.log(response);
          this.caluculationAmount = this.totalAmount
          this.paymentText = "Pay $" + this._decimalPipe.transform(this.totalAmount, '1.2-2') + " for all outstanding Civil Penalties";
          this.showViolations = true;
          this.isSelected = true;
          this.showDisputes = false;
        });
      }
    }
  }
  navigateBack() {
    if (this.showDisputes == true) {
      this.searchViolations("search");
    }else if(this.showHearing){
      this.showHearing = false;
      this.showDisputes = true;
    }
    else {
      this.violations = [];
      this.showViolations = false;
      this.caluculationAmount = 0;
      this.paymentText = "Pay $" + 0 + " for all outstanding Civil Penalties";
      this.totalAmount = 0;
    }
  }
  openModal(violation: any) {
    this.showModal = true;
    this.srcofimage = "https://www.w3schools.com/images/w3schools_green.jpg";
  }
  closeModal() {
    this.showModal = false;
  }
  PaymentSubmit() {
    var finalAmount = this.caluculationAmount;
    if (finalAmount > 1) {
      this.showPaymentModal = true;
    }
  }
  closePaymentModal() {
    this.showPaymentModal = false;
  }
  public expandDetails(violation: any) {
    if (violation.noticeDetailToggle) {
      violation.noticeDetailToggle = false;
    } else {
      violation.noticeDetailToggle = true;
      violation.noticeDetailToggle = true;
      violation.noticeDetailData = noticeDetailData;
      return
      let accountgid = this.apiService.authData.AccountGuid;
      this.apiService.getTransactionsByAccountGuidAndTVNID(accountgid, violation.TVNID).subscribe((details) => {
        violation.noticeDetailData = details;
      });
    }
  }
  onChange(Amount: number, isChecked: any) {
    if (isChecked.target.checked) {
      this.caluculationAmount = this.caluculationAmount + Amount;
      if (this.caluculationAmount === this.totalAmount) {
        this.paymentText = "Pay $" + this._decimalPipe.transform(this.totalAmount, '1.2-2') + " for all outstanding Civil Penalties";
      } else {
        this.paymentText = "Pay $" + this._decimalPipe.transform(this.caluculationAmount, '1.2-2') + ' for Civil Penalties';
      }
    } else {
      this.caluculationAmount = this.caluculationAmount - Amount;
      if (this.caluculationAmount === this.totalAmount) {
        this.paymentText = "Pay $" + this._decimalPipe.transform(this.totalAmount, '1.2-2') + " for all outstanding Civil Penalties";
      } else {
        this.paymentText = "Pay $" + this._decimalPipe.transform(this.caluculationAmount, '1.2-2') + ' for Civil Penalties';
      }
    }
  }

  submitFeedback(){
    this.showFeedbackModal = false;
    this.showSuccessModal = true;
  }
}
let violationsData: any[] = [
  {
    NoticeNumber: "005 806 360",
    noticeDate: '09/03/2023',
    noticeStage: 'Final Order of Liability in Default',
    status: 'In Collections',
    amount: "150.00",
  },
  {
    NoticeNumber: "006 482 893",
    noticeDate: '09/18/2023',
    noticeStage: 'Second Notice of Civil Penalty',
    status: 'Hearing Requested',
    amount: "150.00",
  },
  {
    NoticeNumber: "008 788 332",
    noticeDate: '11/21/2023',
    noticeStage: 'First Notice of Civil Penalty',
    status: 'UNPAID',
    discount: "50%",
    amount: "225.00",
  },
  {
    NoticeNumber: "009 406 360",
    noticeDate: '11/29/2023',
    noticeStage: 'First Notice of Civil Penalty',
    status: 'IN DISPUTE',
    discount: "50%",
    amount: "75.00",
  },
]
let noticeDetailData = [
  {
    civilPenalityNumber: 10452,
    dateTime: "11/19/23 08:37 AM",
    location: 'I-70 MEXL – Westbound',
    safetyViolation: 'Vehicle using I-70 Mountain Express Lane outside operating hours',
    amountDue: '150'
  },
  {
    civilPenalityNumber: 10453,
    dateTime: "11/19/23 08:42 AM",
    location: 'I-70 MEXL – Westbound',
    safetyViolation: 'Vehicle using I-70 Mountain Express Lane outside operating hours',
    amountDue: '150'
  },
  {
    civilPenalityNumber: 10454,
    dateTime: "11/19/23 08:49 AM",
    location: 'I-70 MEXL – Westbound',
    safetyViolation: 'Vehicle using I-70 Mountain Express Lane outside operating hours',
    amountDue: '150'
  }
]