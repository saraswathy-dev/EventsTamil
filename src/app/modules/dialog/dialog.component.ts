import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  productForm!:FormGroup;
  actionBtn:string="save";
selectedFiles:any=null;
  constructor(private formBuilder:FormBuilder,private api:ApiService,
    @Inject (MAT_DIALOG_DATA) public editData:any,private http:HttpClient,
    private sanitizer: DomSanitizer,
    private dialogRef:MatDialogRef<DialogComponent>){}

    public getSantizeUrl(url : string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
ngOnInit(): void {
  this.productForm=this.formBuilder.group({
    eventName:['',Validators.required],
    eventDescription:['',Validators.required],
    venue:['',Validators.required],
    ticketPrice:['',Validators.required],
    eventDuration:['',Validators.required],
    eventDate:['',Validators.required],
    image:['',Validators.required]
  })
  
    if(this.editData){
      this.actionBtn="update"
      this.productForm.controls['eventName'].setValue(this.editData.eventName);
      this.productForm.controls['eventDescription'].setValue(this.editData.eventDescription);
      this.productForm.controls['venue'].setValue(this.editData.venue);
      this.productForm.controls['ticketPrice'].setValue(this.editData.ticketPrice);
      this.productForm.controls['eventDuration'].setValue(this.editData.eventDuration);
      this.productForm.controls['image'].setValue(this.editData.image);
      this.productForm.controls['eventDate'].setValue(this.editData.eventDate);
    }
    }
updateData(){
  this.api.putData(this.productForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert('Event updated successfully');
      this.productForm.reset();
      this.dialogRef.close('update');
    },error:()=>{
      alert("Error while updating")
    }
  })
    
}
addEvents(){
 if(!this.editData){
  if(this.productForm.valid){
    this.api.postEvent(this.productForm.value)
    .subscribe({
      next:(res)=>{
        alert('Events has been added successfully')
        this.productForm.reset();
      this.dialogRef.close('save');
      },
      error:()=>{
        alert("Error while adding the product")
  
      }
      
    })
   }
 }
 else{
  this.updateData()
}
}
onFileSelected(event:any){
  console.log(event)
this.selectedFiles=<File>event.target.files[0];

}
onUpload(){
  const fd=new FormData;
  fd.append('',this.selectedFiles,this.selectedFiles.name);
  this.http.post("http://localhost:3000/posts/",this.selectedFiles).subscribe((res)=>{
    console.log(res)
  })

}

}
