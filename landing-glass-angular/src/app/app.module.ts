import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FeaturesComponent } from "./components/features/features.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { StepsComponent } from "./components/steps/steps.component";
import { LogosComponent } from "./components/logos/logos.component";
import { CtaComponent } from "./components/cta/cta.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    StepsComponent,
    LogosComponent,
    CtaComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
