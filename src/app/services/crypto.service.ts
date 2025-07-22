import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CryptoService {
  private key!: CryptoKey;

  constructor() {
    this.importFixedKey();
  }

  private async importFixedKey() {
    const rawKey = new Uint8Array([
      21, 22, 23, 24, 25, 26, 27, 28,
      29, 30, 31, 32, 33, 34, 35, 36,
      37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52
    ]);
    this.key = await crypto.subtle.importKey(
      'raw',
      rawKey,
      { name: 'AES-GCM' },
      false,
      ['encrypt', 'decrypt']
    );
  }

  async encrypt(plainText: string): Promise<string> {
    if (!this.key) await this.importFixedKey();

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encodedText = new TextEncoder().encode(plainText);
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      this.key,
      encodedText
    );

    const combined = new Uint8Array(iv.byteLength + encrypted.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encrypted), iv.length);

    return btoa(String.fromCharCode(...combined));
  }

  async decrypt(base64Text: string): Promise<string> {
    if (!this.key) await this.importFixedKey();

    const combined = Uint8Array.from(atob(base64Text), c => c.charCodeAt(0));
    const iv = combined.slice(0, 12);
    const data = combined.slice(12);

    try {
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        this.key,
        data
      );

      return new TextDecoder().decode(decrypted);
    } catch (err) {
      console.error('Decryption failed:', err);
      throw err;
    }
  }
}
