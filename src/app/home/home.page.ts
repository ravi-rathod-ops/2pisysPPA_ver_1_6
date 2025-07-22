import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController, Platform, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { environment } from 'src/environments/environment';
import { CryptoService } from '../services/crypto.service';
import { ConfigLoaderService } from '../services/config-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datapass: any = { "base64encodedimage": "./assets/image/no_logo.png" };
  dataUrl = '';
  dataUrls = [];//environment.COMPANY_URL;
  authid = environment.AUTHENTICATE_ID;
  clientid = environment.CLIENT_ID;
  registerForm: FormGroup;
  submitted = false;
  cversion = 2.0;
  versionFlag = false;
  

  constructor(
    public http: HttpClient,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,
    private router: Router,
    private configService : ConfigLoaderService,
    private route:ActivatedRoute,
    private cryptoService: CryptoService,
    @Inject('APP_CONFIG') private config: any
  ) {
    
   }

  

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required],
      company_id: ['', Validators.required],
      rememberMe: [false]
    });

    this.dataUrls = this.config.COMPANY_URL;

    this.route.queryParams.subscribe(async (params) => {
      console.log({params});
      
    const encUserId = params['user_id'];
    const encPassword = params['password'];
    const encClientId = params['clientid'];
    const encauthid = params['authid'];

    if (encUserId && encPassword && encClientId && encauthid) {
      try {
        const user_id = await this.cryptoService.decrypt(encUserId);
        const password = await this.cryptoService.decrypt(encPassword);
        const clientid = await this.cryptoService.decrypt(encClientId);
        const authid = await this.cryptoService.decrypt(encauthid);

        localStorage.setItem('userid', user_id);
        localStorage.setItem('password', password);
        localStorage.setItem('clientid', clientid);
        localStorage.setItem('authid', authid);

        this.registerForm.patchValue({
          userid: user_id,
          password: password,
          company_id: clientid,
          'auth-id':authid
        });

        await this.submitData();
      } catch (error) {
        console.error('Decryption failed', error);
        this.toastfunction('Invalid or tampered URL parameters.', 'danger');
      }
    }
  });
    
      

    if (localStorage.getItem('authid') != null) {
      this.authid = localStorage.getItem('authid');
    } else {
      localStorage.setItem('authid', this.authid);
    }

    if (localStorage.getItem('clientid') != null) {
      this.clientid = localStorage.getItem('clientid');
    } else {
      localStorage.setItem('clientid', this.clientid);
    }

    const headers = {
      'auth-id': localStorage.getItem('authid'),
      'client-id': localStorage.getItem('clientid')
    };

    if (localStorage.getItem('url') != '') {
      this.dataUrl = localStorage.getItem('url');
      this.getCustomIcon(this.dataUrl, headers);

      this.http.get<any>(this.dataUrl + '/api/appversion/plan', { headers }).subscribe({
        next: async data => {
          if (this.cversion >= data.message) {
            this.versionFlag = false;
            if (localStorage.getItem('userid') != null && localStorage.getItem('password') != null) {
              this.router.navigate(["Widgets"]);
            } else {
              this.router.navigate(["home"]);
            }
          } else {
            this.versionToastFunction();
            this.versionFlag = true;
          }
        },
        error: errordata => {
          if (errordata.error.message) {
            this.toastfunction(errordata.error.message, "danger");
          } else {
            this.toastfunction("Invalid Company Url, Please Check in Home page 2", "danger");
          }
        }
      });
    }
  }

  get f() { return this.registerForm.controls; }

  onClickMe(obj) {
    this.router.navigate([obj]);
  }

  async submitData() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      spinner: 'dots'
    });
    await loading.present();

    const headers = {
      'auth-id': localStorage.getItem('authid'),
      'client-id': localStorage.getItem('clientid'),
      'user': this.registerForm.value.userid,
      'password': Md5.hashStr(this.registerForm.value.password)
    };
    
    let company_id = this.registerForm.value.company_id?.toLowerCase().trim();
    let fullUrl: any | undefined;
    for (let obj of this.dataUrls) {
      if (obj.hasOwnProperty(company_id)) {
        fullUrl = "https://"+obj[company_id];
        break;
      }
    }

    
    if (fullUrl) {
      this.dataUrl = fullUrl;
      this.getCustomIcon(this.dataUrl, headers);
      localStorage.setItem('url', fullUrl);
    } else {
      this.toastfunction("Invalid Company Id", "danger");
      loading.dismiss();
      return;
    }

    this.http.get<any>(this.dataUrl + "/api/userlogin/" + this.registerForm.value.userid, { headers }).subscribe({
      next: async data => {
        this.router.navigate(["Widgets"]);

        localStorage.setItem('userid', this.registerForm.value.userid);
        localStorage.setItem('password', Md5.hashStr(this.registerForm.value.password));
        
         localStorage.setItem('lastManualLogin', new Date().toISOString());
        this.setStorage();
        loading.dismiss();
      },
      error: errordata => {
        loading.dismiss();
        if (errordata.error.message) {
          this.toastfunction(errordata.error.message, "danger");
        } else {
          this.toastfunction("Invalid Company Url, Please Check in Home page 3", "danger");
        }
      }
    });
  }

  expiryDate;
  setStorage() {
    let date = new Date();
    this.expiryDate = date.setDate(date.getDate() + 1);
    localStorage.setItem("your-data-key", this.expiryDate.toString());
  }

  async toastfunction(msg, colour) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      animated: true,
      color: colour
    });

    toast.present();
  }

  refresher() {
    this.ngOnInit();
  }

  async versionToastFunction() {
    const toast2 = await this.toastController.create({
      header: "Update required",
      message: "A new PPA app is now available. Please update from playstore.",
      position: 'bottom',
      animated: true,
      color: "danger"
    });

    toast2.present();
  }

  getCustomIcon(url, headers) {
    this.http.get<any>(url + '/api/custicon', { headers }).subscribe({
      next: async data => {
        this.datapass = data.message[0];
        this.datapass.base64encodedimage = "data:image/png;base64," + data.message[0].base64encodedimage;
        localStorage.setItem('brandImage', this.datapass.base64encodedimage);
      },
      error: errordata => {
        if (errordata.error.message) {
          this.toastfunction(errordata.error.message, "danger");
        } else {
          this.toastfunction("Invalid Company Url, Please Check in Home page 1", "danger");
        }
      }
    });
  }
}
