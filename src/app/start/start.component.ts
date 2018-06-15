import { element } from 'protractor';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { ToastsManager } from 'ng2-toastr';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private location: Location) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  someToaster() {
    this.showSuccess();
  }


  showSuccess() {
    console.log("hi");

    this.toastr.success('You are awesome!', 'Success!');
    console.log("done");

  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
  }
  ngOnInit() {

  }

 

}
