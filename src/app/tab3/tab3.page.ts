import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  formData: FormGroup = this.builder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    message: new FormControl('', [Validators.required])
  })

  errorMsg = '';

  constructor(private builder: FormBuilder, private router: Router,
    private netlifyForms: NetlifyFormsService) { }

  ngOnInit(): void {
  }

  closeError() {
    this.errorMsg = '';
  }

  onSubmit() {
    this.netlifyForms.submitFeedback(this.formData.value).subscribe(
      () => {
        this.formData.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
  }

}
