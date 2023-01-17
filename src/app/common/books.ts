import { Injectable } from '@angular/core';

export interface Book {
  name: string;
  shortName?: string;
  img?: string;
  id: {
    section?: string;
    author: string;
    book: string;
  };
  author: string;
  shortAuthor?: string;
  summary: string;
  content: string;
}

export interface Section {
  name: string;
  summary: string;
}

const CURSIVES = 'cursives';
const PERSONALS = 'personals';

export const SECTIONS: { [key: string]: Section } = {
  [CURSIVES]: {
    name: 'Lectures cursives',
    summary: 'La liste des lectures proposées par l\'école tout au long de mon parcours'
  },
  [PERSONALS]: {
    name: 'Lectures personnelles',
    summary: 'The Component Dev Kit (CDK) is a set of behavior primitives for building UI' +
      ' components.'
  },
};

const BOOKS: { [key: string]: Book[] } = {
  [CURSIVES]: [
    {
      name: 'Le caractère de la bruyère',
      img: 'assets/covers/bruyere-delerm.png',
      id: {
        author: 'delerm',
        book: 'caractere-bruyere'
      },
      author: 'Philipe Delerm',
      summary: `« Terre de bruyère. Elle a donné son nom au sol qui la conçoit. C'est dire de quel prestige est habité la fleur éponyme, pourtant si simple, couvre sol de lande et de forèt. On en cueille un brin frèle. Les clochettes lilliputiennes ont le rose-mauve d'une fraîcheur à l'avance passée mélancolique, un trait de rouille infime sur les bords. Un signe, une histoire d'amour, un souvenir d'automne. »`,
      content: ''
    },
    {
      name: 'Dom Juan ou le Festin de Pierre',
      // img: 'assets/covers/dj-moliere.png',
      id: {
        author: 'moliere',
        book: 'dom-juan'
      },
      author: 'Molière',
      summary: ``,
      content: ''
    },
    {
      name: 'Test #1',
      id: {
        author: 'test-author',
        book: 'test-book'
      },
      author: 'Test Author',
      summary: ``,
      content: ''
    }
  ],
  [PERSONALS]: [
    {
      shortName: 'Le seigneur des Anneaux',
      name: 'Le seigneur des anneaux - Livre 1 : La communauté de l\'anneau',
      img: 'assets/covers/communaute-anneau-jrr-tolkien.png',
      id: {
        author: 'tolkien',
        book: 'communaute-de-l-anneau'
      },
      author: 'John Ronald Reuel Tolkien',
      shortAuthor: 'J.R.R Tolkien',
      summary: `Tout commence avec les cent onze ans de Bilbo Sacquet, le héros de Bilbo le Hobbit, qui, fidèle à sa réputation d'excentricité, disparaît au beau milieu de la prodigieuse fête donnée pour fêter son anniversaire. Toutes ses possessions vont à son neveu Frodo, y compris le petit anneau d'or… petit anneau dont la nature est finalement élucidée par Gandalf : il s'agit de l'Anneau Unique, forgé par Sauron, le Seigneur des Ténèbres, pour dominer tous les autres. Frodo se voit contraint de quitter l'apparente sécurité de la Comté pour partir en un périlleux voyage jusqu'à Fondcombe et, au-delà, vers les Crevasses du Destin, « au pays de Mordor où s'étendent les ombres », pour détruire l'Anneau et mettre un terme au pouvoir de Sauron.`,
      content: ''
    }
  ]
};

for (const book of BOOKS[CURSIVES]) {
  book.id.section = 'cursives';
}

for (const book of BOOKS[PERSONALS]) {
  book.id.section = 'personals';
}

export const BOOKS_RAW = BOOKS;
export const ALL_CURSIVES = BOOKS[CURSIVES];
export const ALL_PERSONALS = BOOKS[PERSONALS];
export const ALL_BOOKS = ALL_CURSIVES.concat(ALL_PERSONALS);

@Injectable()
export class DocumentationItems {

  getItems(section: string): Book[] {
    if (section === CURSIVES) {
      return ALL_CURSIVES;
    }
    if (section === PERSONALS) {
      return ALL_PERSONALS;
    }
    return [];
  }

  getItemById(id: string, section: string): Book | undefined {
    const sectionLookup = section === 'cursives' ? 'cursives' : 'personnelles';
    return ALL_BOOKS.find(doc => doc.id.book === id && doc.id.section === sectionLookup);
  }
}
