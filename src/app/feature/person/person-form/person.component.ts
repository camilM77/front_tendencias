import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  constructor(
    private personService: PersonService,
    private acticatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  initialForm: Person = {
    personId: 0,
    name: '',
    lastname: '',
    phone: '',
    birthday: new Date(),
    enabled: false,
  };

  form: Person = this.initialForm;

  ngOnInit(): void {
    this.acticatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }
  save(): void {
    console.log(this.form);
    this.personService.save(this.form).subscribe(() => {
      this.form = this.initialForm;
      this.router.navigate(['/layout/person-list']);
    });
  }

  findById(id: number): void {
    this.personService.findByid(id).subscribe((res) => {
      this.form = res;
    });
  }

  deleteById(): void {
    this.personService.deleteByid(this.form.personId).subscribe(() => {
      console.log('borrado');
    });
  }
}
