import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.css'
})
export class PasswordGeneratorComponent {
  password: string = '';
  passwordLength: number = 12; // default password length
  includeDigits: boolean = true; // include digits by default
  includeSpecialChars: boolean = true; // include special characters by default
  includeUpperCaseLetter: boolean = true; // include
  includeLowerCaseLetter: boolean = true; // include

  constructor(private clipboard: Clipboard) {}

generatePassword(): void {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const symbols = '!@#$%^&*()_+{}[]';


  if(!(this.includeDigits) && !(this.includeLowerCaseLetter) && !(this.includeSpecialChars)&& !(this.includeUpperCaseLetter)) {
    alert('Select any one checkbox');
    this.password='';
  } else {
    let characters = '';
    if (this.includeUpperCaseLetter) characters += uppercaseLetters;
    if (this.includeLowerCaseLetter) characters += lowercaseLetters;
    if (this.includeDigits) characters += digits;
    if (this.includeSpecialChars) characters += symbols;

    let newPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const randomValue = window.crypto.getRandomValues(new Uint8Array(1))[0];
    const randomIndex = randomValue % characters.length;
      newPassword += characters[randomIndex];
    }

    this.password = newPassword;
  }
}

copyToClipboard(): void {
  if (this.password) {
    this.clipboard.copy(this.password); // Copy password to clipboard
  }
}
}
