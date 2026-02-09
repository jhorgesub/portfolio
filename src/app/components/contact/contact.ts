import { Component, inject, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ContactService } from '../../services/contact.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {

  private _translationService = inject(TranslationService);
  private _contactService = inject(ContactService);

  /* lang = this._translationService.currentLanguage;
  data = this._contactService.getContact();
  readonly email = this._translationService.getContent().email; */

  formularioContacto: FormGroup;

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.formularioContacto.reset();
  }

  enviar() {
    if (this.formularioContacto.invalid) {
      console.log('Formulario inválido');
      this.formularioContacto.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.formularioContacto);
  }



  /* contactText = computed(() => {
    const currentLang = this.lang();
    return {
      title: this.data.title[currentLang],
      subtitle: this.data.subtitle[currentLang],
      description: this.data.description[currentLang],
      linkedin: this.data.linkedin[currentLang],
      github: this.data.github[currentLang],
      emailLabel: this.data.email[currentLang],
    };
  }); */

}
