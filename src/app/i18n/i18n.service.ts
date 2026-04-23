import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Language, TRANSLATIONS, TranslationContent } from './translations';

const LANGUAGE_STORAGE_KEY = 'retailpulse.language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly document = inject(DOCUMENT, { optional: true });

  readonly language = signal<Language>(this.resolveInitialLanguage());
  readonly copy = computed<TranslationContent>(() => TRANSLATIONS[this.language()]);

  constructor() {
    effect(() => {
      const currentDocument = this.document;

      if (!currentDocument) {
        return;
      }

      currentDocument.documentElement.lang = this.language();
    });
  }

  setLanguage(language: Language): void {
    if (language === this.language()) {
      return;
    }

    this.language.set(language);
    this.persistLanguage(language);
  }

  private resolveInitialLanguage(): Language {
    const storedLanguage = this.readStoredLanguage();

    if (storedLanguage) {
      return storedLanguage;
    }

    return 'es';
  }

  private readStoredLanguage(): Language | null {
    const storage = this.getStorage();
    if (!storage) {
      return null;
    }

    const storedLanguage = storage.getItem(LANGUAGE_STORAGE_KEY);
    return this.parseLanguage(storedLanguage);
  }

  private parseLanguage(value: string | null | undefined): Language | null {
    if (value === 'es' || value === 'en') {
      return value;
    }

    return null;
  }

  private persistLanguage(language: Language): void {
    const storage = this.getStorage();
    if (!storage) {
      return;
    }

    storage.setItem(LANGUAGE_STORAGE_KEY, language);
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
