import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person-form/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonToolbarComponent } from './person/person-toolbar/person-toolbar.component';

import { PersonSearchComponent } from './person/person-search/person-search.component';
@NgModule({
  declarations: [
  PersonComponent,
  PersonListComponent,
  PersonToolbarComponent,
  PersonSearchComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
