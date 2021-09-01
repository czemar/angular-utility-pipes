import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsePipe } from './pipes/use-pipe/use.pipe';
import { KeysPipe } from './pipes/keys-pipe/keys.pipe';

@NgModule({
  exports: [
    UsePipe,
    KeysPipe
  ],
  imports: [
    BrowserModule
  ],
})
export class UtilityPipesModule { }
