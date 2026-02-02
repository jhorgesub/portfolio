import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Contact } from "../../components/contact/contact";
import { Footer } from "../../components/footer/footer";
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Hero, Contact, Footer, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
