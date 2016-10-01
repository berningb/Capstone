import {NgModule} from '@angular/core';

@NgModule({
  declarations: […], // directives, components, and pipes owned by this NgModule
  imports: [BrowserModule],
  providers: […], // additional providers
  bootstrap: [MainComponent],
})
class MyAppModule {}
