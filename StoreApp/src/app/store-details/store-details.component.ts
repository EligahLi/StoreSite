import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreDetail } from '../shared/store-detail.model';
import { StoreDetailService } from '../shared/store-detail.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styles: [
  ]
})
export class StoreDetailsComponent implements OnInit {

  constructor(public service: StoreDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:StoreDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  public onDelete(id:number){
    if(confirm('Are you sure, you whant to delete this record?'))
    {
    this.service.deleteStoreDetail(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted successfully", 'Store Detail Register');
      },
      err =>{console.log(err)}
    )
    }
  }

}
