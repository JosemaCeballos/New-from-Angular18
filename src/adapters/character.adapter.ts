import { Character, CharacterInfo } from "../models/character.model";

export const CharacterAdapter = (characterInfo: CharacterInfo): Character[] => {
    return characterInfo.results
}