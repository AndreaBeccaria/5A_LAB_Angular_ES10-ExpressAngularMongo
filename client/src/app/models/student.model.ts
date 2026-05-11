/*codeshare.io/5olkvb*/
export interface Indirizzo {
  via: string;
  citta: string;   // nome reale nel DB MongoDB (senza accento)
  CAP: string;     // maiuscolo come nel DB
}

export interface Corso {
  nome: string;
  voto: number;
}

export interface Student {
  _id?: string;   // il ? indica che l'id è opzionale: non serve quando creiamo un nuovo studente, ma è presente negli studenti letti dal DB
  nome: string;
  cognome: string;
  eta: number;
  indirizzo?: Indirizzo;
  interessi?: string[];
  corsi?: Corso[];
  dataIscrizione?: string;
  dataNascita?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  msg: string;
  token: string;
}

export interface StatisticaItem {
  _id: string;
  totale: number;
}
