import { Component, HostBinding, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Componente OffCanvas (demostrativo).
 * Reemplaza el aside vanilla JS del proyecto CESUR.
 * HTML y CSS incluidos dentro del componente.
 */
@Component({
  selector: 'app-offcanvas',
  template: `
    <aside class="off-canvas">
      <nav class="off-canvas-menu">
        <button class="off-canvas-close" (click)="onCloseClick()">&times;</button>
        <ul>
          <li>
            <a routerLink="/program/dam">DAM<br><small>Multiplatform Application Development</small></a>
          </li>
          <li>
            <a routerLink="/program/daw">DAW<br><small>Web Application Development</small></a>
          </li>
          <li>
            <a routerLink="/program/asir">ASIR<br><small>IT Systems Administration</small></a>
          </li>
          <li>
            <a routerLink="/program/asrm">ASRM<br><small>Microcomputer Systems and Network</small></a>
          </li>
        </ul>
      </nav>
      <footer>
        © CESUR 2024 — Inspiring the next generation of IT professionals.
      </footer>
    </aside>
  `,
  styles: [`
    aside.off-canvas {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 15rem;
      background-color: var(--background-color-light);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    aside.off-canvas button.off-canvas-close {
      position: absolute;
      top: 5px;
      right: 5px;
      border-radius: 50%;
    }

    aside.off-canvas ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    aside.off-canvas ul li {
      padding: 1rem;
      border-color: var(--background-color-accent);
      border-style: solid none none none;
      border-width: 1px;
      transition: 0.25s;
    }

    aside.off-canvas ul li:last-child {
      border-style: solid none solid none;
    }

    aside.off-canvas ul li:hover {
      background-color: var(--background-color-accent);
    }

    aside.off-canvas a {
      color: inherit;
      text-decoration: none;
    }

    aside.off-canvas footer {
      font-size: 0.75rem;
      text-align: center;
      padding: 0.5rem;
    }

    aside.off-canvas.hidden {
      left: -15rem;
    }
  `]
})
export class OffcanvasComponent implements OnInit {

  /** Estado abierto/cerrado del offcanvas */
  @Input() isOpen = false;

  /** Se emite cuando el offcanvas se abre */
  @Output() open = new EventEmitter<void>();

  /** Se emite cuando el offcanvas se cierra */
  @Output() close = new EventEmitter<void>();

  /** Vincula la clase CSS .hidden al inverso de isOpen */
  @HostBinding('class.hidden')
  get hidden(): boolean {
    return !this.isOpen;
  }

  ngOnInit(): void {
    console.log('Offcanvas component initialized');
  }

  /** Alterna el estado del menú (equivalente al toggle de .hidden) */
  toggle(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.open.emit();
    } else {
      this.close.emit();
    }
  }

  /** Cierra el offcanvas desde el botón de cierre (×) */
  onCloseClick(): void {
    this.isOpen = false;
    this.close.emit();
  }
}
