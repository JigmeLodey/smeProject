import {Component, HostListener, OnInit} from '@angular/core';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {DesktopService} from './desktop.service';
import {NotifierService} from 'angular-notifier';
import {makeEs5TranslatePlugin} from '@angular/localize/src/tools/src/translate/source_files/es5_translate_plugin';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css',]
})
export class DesktopComponent implements OnInit {
  scroll = true;
  facebook = faFacebook;
  twitter = faTwitter;
  insta = faInstagram;
  mail = faGoogle;
  contactUs: FormGroup;
  private readonly notifier: NotifierService;

  constructor(private formBuilder: FormBuilder, private service: DesktopService, private notifierService: NotifierService, private route: Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.contactFormBuilder();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent(event) {

    if (event.pageY > 100) {
      this.scroll = false;
    } else {
      this.scroll = true;
    }
  }

  contactFormBuilder() {
    this.contactUs = this.formBuilder.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phone: [undefined, Validators.required],
      message: [undefined, Validators.required]
    });
  }

  onSendContact() {
    if (this.contactUs.valid) {
      this.service.postContact(this.contactUs.value).subscribe(res => {
        if (res) {
          this.notifier.notify('success', 'Message Sent');
        } else {
          this.notifier.notify('error', 'Failed to send');
        }
      });
    } else {
      this.notifier.notify('error', 'Empty message cannot be send');
    }
  }

  onSignin() {
    this.route.navigate(['../auth']);
  }
}
