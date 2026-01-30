import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { initCarousels } from 'flowbite';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Projects, TECH_ICONS } from '../../services/projects';

@Component({
  selector: 'app-project-details',
  imports: [Footer, Navbar, RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);
  private route = inject(ActivatedRoute);
  private _project = inject(Projects);

  private params = toSignal(this.route.paramMap);

  project = computed(() => {
    const id = Number(this.params()?.get('id'));
    return this._project.getProjectById(id);
  });

  // Lightbox state
  showLightbox = signal(false);
  currentImageIndex = signal(0);

  openLightbox(index: number): void {
    this.currentImageIndex.set(index);
    this.showLightbox.set(true);
  }

  closeLightbox(): void {
    this.showLightbox.set(false);
  }

  nextImage(): void {
    const images = this.project()?.carouselImages;
    if (images && this.currentImageIndex() < images.length - 1) {
      this.currentImageIndex.update(i => i + 1);
    }
  }

  previousImage(): void {
    if (this.currentImageIndex() > 0) {
      this.currentImageIndex.update(i => i - 1);
    }
  }


  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Scroll to top when page loads
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => initCarousels(), 100);
    }
  }

  getTechIcon(techName: string): string {
    return TECH_ICONS[techName]?.icon || 'fa-solid fa-code';
  }

  getTechColor(techName: string): string {
    return TECH_ICONS[techName]?.color || '#888888';
  }

  goToSlide(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      const carousel = document.querySelector('[data-carousel="slide"]');
      if (carousel) {
        const items = carousel.querySelectorAll('[data-carousel-item]');
        const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');

        // Hide all items
        items.forEach(item => {
          item.classList.add('hidden');
          item.removeAttribute('data-carousel-item');
        });

        // Show selected item
        if (items[index]) {
          items[index].classList.remove('hidden');
          items[index].setAttribute('data-carousel-item', 'active');
        }

        // Update indicators
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.remove('border-glass');
            indicator.classList.add('border-accent');
          } else {
            indicator.classList.remove('border-accent');
            indicator.classList.add('border-glass');
          }
        });
      }
    }
  }


}
