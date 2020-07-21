# Genki Japans

Deze applicatie is mijn eigen implementatie van een flipkaartensysteem om Kanji te oefenen.

## Technische implementatie

De applicatie is volledig _client-side_ zoals ze dat zeggen. Wat betekent dat alles in JavaScript wordt gedaan. Je kan deze app dus gewoon starten door deze git repository te downloaden en `index.html` te openen in jouw browser.

De applicatie is gebaseerd rond een _state_ object en een _event broker_ die een Observer design pattern implementeert.

### Event broker

De volgende events worden afgevuurd:

* `EVENT_TOGGLE_SETTINGS_VIEW`: Als er op de "Instellingen" knop wordt gedrukt.
* `EVENT_TOGGLE_EXPLANATION_VIEW`: Als er op de "Hoe werkt dit?" knop wordt gedrukt.
* `EVENT_START_QANDA`: Als er op de start knop wordt gedrukt.
* `EVENT_PAUZE_QANDA`: Als er op de pauze knop wordt gedrukt.
* `EVENT_STOP_QANDA`: Als er op de stop knop wordt gedrukt. 

## Uitbreidingen

* Gewone woordenschat valt ook perfect te oefenen. Komt dus neer op het uitbreiden van de woordenboeken.
