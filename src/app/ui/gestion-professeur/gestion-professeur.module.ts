import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProfesseurRoutingModule } from './gestion-professeur-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [CreateComponent, UpdateComponent, DetailsComponent, ListComponent],
  imports: [
    CommonModule,
    GestionProfesseurRoutingModule
  ]
})
export class GestionProfesseurModule { }
