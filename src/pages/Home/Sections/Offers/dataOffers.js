import dictionary from 'assets/icons/offers/dictionary.png';
import document from 'assets/icons/offers/document.png';
import material from 'assets/icons/offers/material.png';
import team from 'assets/icons/offers/team.webp';

export const dataOffers = [
  {
    number: '01',
    title: 'Dokumentation',
    description: [
      {
        text: 'Einfach',
        subtext: 'Antworten zu vorgefertigten Fragen auswählen ',
      },
      {
        text: 'Regresssicher',
        subtext:
          'Für jede Behandlung  hat unser Team die perfekte Doku erstellt',
      },
    ],
    image: document,
  },
  {
    number: '02',
    title: 'Material, Labor',
    description: [
      {
        text: 'BEB-Leistungen',
        subtext: 'Nie wieder Chairside-Leistungen vergessen ',
      },
      {
        text: 'Material',
        subtext: 'Alle Materialien Deiner Behandlung sofort parat',
      },
    ],
    image: material,
  },
  {
    number: '03',
    title: 'Lexikon',
    description: [
      {
        text: 'Praktische Tipps',
        subtext: 'Alles was wirklich wichtig ist auf einen Blick',
      },
    ],
    image: dictionary,
  },
  {
    number: '04',
    title: 'Entlastung für das ganze Team',
    description: [
      {
        text: 'Weniger Aufwand, mehr Resultat',
        subtext: 'Vollständige Einträge bei weniger gestresstem Personal',
      },
      {
        text: 'Super einfaches Onboarding',
        subtext: 'Einsetzbar ab Tag 1',
      },
    ],
    image: team,
  },
];
