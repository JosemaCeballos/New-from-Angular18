import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharactersService } from '../../services';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  private characterService = inject(CharactersService);
  characterInfo: Record<string, Character> = {}
  characters$: Observable<Character[]> = this.characterService.getCharacters();

  async makeApiCall(url: string) {
    let character = await firstValueFrom(
      this.characterService.getCharacterInformation(url)
    );
    this.characterInfo[character.id] = character
  }
}
