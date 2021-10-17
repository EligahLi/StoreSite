import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreDetail } from 'src/app/shared/store-detail.model';
import { StoreDetailService } from 'src/app/shared/store-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-detail-form',
  templateUrl: './store-detail-form.component.html',
  styles: [
  ]
})
export class StoreDetailFormComponent implements OnInit {

  constructor(public service: StoreDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  public onAdmit(form: NgForm){
    if(this.service.formData.storeDetailId==0)
    this.insertRecord(form);
    else
    this.updateRecords(form);

  }

  insertRecord(form:NgForm){
    this.service.postStoreDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Admitted successfully','Store Detail Register')
      },
      err => {console.log(err); }
    );
  }

  updateRecords(form:NgForm){
    this.service.putStoreDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully','Store Detail Register')
      },
      err => {console.log(err); }
    );

  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new StoreDetail();
  }

}
