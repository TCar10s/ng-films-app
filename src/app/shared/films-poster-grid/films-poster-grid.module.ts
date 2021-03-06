import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsPosterGridComponent } from './films-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { FilmCardComponent } from './film-card/film-card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [FilmsPosterGridComponent, FilmCardComponent],
  exports: [
    FilmsPosterGridComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    PipesModule,
    SkeletonModule,
    LazyLoadImageModule
  ]
})
export class FilmsPosterGridModule { }
