import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, computed, effect, inject, signal } from '@angular/core';
import { I18nService } from './i18n/i18n.service';
import { Language } from './i18n/translations';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'retailpulse.theme';
const WEB_APPLICATION_URL = 'https://polite-sea-0e075210f.7.azurestaticapps.net';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '[class.theme-dark]': "theme() === 'dark'"
  }
})
export class App implements OnDestroy {
  private readonly document = inject(DOCUMENT, { optional: true });
  private readonly i18n = inject(I18nService);
  private contactToastTimer: ReturnType<typeof setTimeout> | null = null;
  private readonly profileImageByName: Record<string, string> = {
    Jesus: '/assets/images/Perfil_Jesus.png',
    Anghelo: '/assets/images/perfil-anghelo.png',
    Luis: '/assets/images/perfil-luis.png',
    Fabio: '/assets/images/perfil-fabio-vallejo.png'
  };

  private readonly benefitImageByClass: Record<string, string> = {
    'benefit-illustration-admin-layout': '/assets/images/layout.png',
    'benefit-illustration-admin-alerts': '/assets/images/alertas.png',
    'benefit-illustration-buyer-nav': '/assets/images/rutas.png',
    'benefit-illustration-buyer-stock': '/assets/images/stock.png'
  };

  protected readonly currentYear = new Date().getFullYear();
  protected readonly copy = this.i18n.copy;
  protected readonly language = this.i18n.language;
  protected readonly theme = signal<Theme>(this.resolveInitialTheme());
  protected readonly showContactToast = signal(false);
  protected readonly brandLogoPath = '/assets/images/logo-retailpulse.png';
  protected readonly webApplicationUrl = WEB_APPLICATION_URL;
  protected readonly registerUrl = `${WEB_APPLICATION_URL}/register`;

  protected readonly themeButtonIcon = computed(() => (this.theme() === 'dark' ? '\u2600' : '\u263E'));
  protected readonly contactToastMessage = computed(() =>
    this.language() === 'es' ? 'Comentario enviado (simulado).' : 'Comment sent (simulated).'
  );
  protected readonly themeToggleLabel = computed(() => {
    const isSpanish = this.language() === 'es';
    if (this.theme() === 'dark') {
      return isSpanish ? 'Cambiar a tema claro' : 'Switch to light theme';
    }

    return isSpanish ? 'Cambiar a tema oscuro' : 'Switch to dark theme';
  });

  protected readonly languageOptions: ReadonlyArray<{ code: Language; label: string }> = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  constructor() {
    effect(() => {
      const currentDocument = this.document;
      if (!currentDocument) {
        return;
      }

      currentDocument.documentElement.dataset['theme'] = this.theme();
    });
  }

  protected setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  protected toggleTheme(): void {
    const nextTheme: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    this.persistTheme(nextTheme);
  }

  protected onContactSubmit(event: Event): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;
    form?.reset();

    this.showContactToast.set(true);

    if (this.contactToastTimer) {
      clearTimeout(this.contactToastTimer);
    }

    this.contactToastTimer = setTimeout(() => {
      this.showContactToast.set(false);
      this.contactToastTimer = null;
    }, 2200);
  }

  protected footerCopyright(): string {
    return this.copy().footer.bottom.replace('{{year}}', String(this.currentYear));
  }

  protected registerPlanUrl(planId: string): string {
    return `${this.registerUrl}?plan=${encodeURIComponent(planId)}`;
  }

  protected profileImagePath(name: string): string | null {
    return this.profileImageByName[name] ?? null;
  }

  protected benefitImagePath(className: string): string | null {
    const classTokens = className.split(' ');
    const illustrationClass = classTokens.find((token) => token.startsWith('benefit-illustration-'));

    if (!illustrationClass) {
      return null;
    }

    return this.benefitImageByClass[illustrationClass] ?? null;
  }

  ngOnDestroy(): void {
    if (!this.contactToastTimer) {
      return;
    }

    clearTimeout(this.contactToastTimer);
  }

  private resolveInitialTheme(): Theme {
    const storage = this.getStorage();
    if (storage) {
      const storedTheme = this.parseTheme(storage.getItem(THEME_STORAGE_KEY));
      if (storedTheme) {
        return storedTheme;
      }
    }

    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  private persistTheme(theme: Theme): void {
    const storage = this.getStorage();
    if (!storage) {
      return;
    }

    storage.setItem(THEME_STORAGE_KEY, theme);
  }

  private parseTheme(value: string | null): Theme | null {
    if (value === 'light' || value === 'dark') {
      return value;
    }

    return null;
  }

  private getStorage(): Storage | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      return window.localStorage;
    } catch {
      return null;
    }
  }
}
