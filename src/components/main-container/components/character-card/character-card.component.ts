import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  OnInit,
  effect,
  inject,
  Injector,
} from '@angular/core';
import { Character } from '../../../../models/character.model';
import { JsonPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage, JsonPipe],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent implements OnInit {
  character = input.required<Character>();
  characterInfo = input<Character>();
  loaded = output<string>();

  injector = inject(Injector);
  doEffect = effect(() => {
      this.loaded.emit(this.character().url);
  },{ injector: this.injector });

  constructor() {}

  ngOnInit(): void {}
}
