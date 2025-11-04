import { Component, signal } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { StepsComponent } from './components/steps/steps.component';
import { LogosComponent } from './components/logos/logos.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    StepsComponent,
    LogosComponent,
    CtaComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('landing-glass-angular');

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
