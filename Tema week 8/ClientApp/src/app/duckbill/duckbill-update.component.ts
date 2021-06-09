import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Duckbill } from './duckbill.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-duckbill-update',
  templateUrl: './duckbill-update.component.html'
})
export class DuckbillUpdateComponent {

  public duckbill: Duckbill = <Duckbill>{};

  public id: string;
  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params.id;
      this.loadDuckbills();
    });
  }

  public updateDuckbill() {
    this.http.put<Duckbill>(this.baseUrl + 'api/duckbills/' + this.id, this.duckbill).subscribe(result => {
      this.router.navigateByUrl("/duckbills");
    }, error => console.error(error))
  }

  public loadDuckbills() {
    this.http.get<Duckbill>(this.baseUrl + 'api/duckbills/' + this.id).subscribe(result => {
      this.duckbill = result;
    }, error => console.error(error))
  }
}
