import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-user-template',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  exibirSidebar: boolean = true; // Propriedade para controlar o estado do Sidebar

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Define o estado inicial do Sidebar com base na URL atual
    this.atualizarExibicaoSidebar(this.router.url);

    // Monitora mudanças de rota e atualiza o estado do Sidebar
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.atualizarExibicaoSidebar(event.url);
      }
    });
  }

  private atualizarExibicaoSidebar(url: string): void {
    this.exibirSidebar = !url.includes('/user/login'); // Esconde o Sidebar na rota de login
    console.log(`URL atual: ${url}, exibirSidebar: ${this.exibirSidebar}`);
  }

}