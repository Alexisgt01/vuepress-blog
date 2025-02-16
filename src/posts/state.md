---
title: "Cessons d'utiliser de simples clés dans nos états."
date: 2024-01-05
category:
  - Laravel
  - Design pattern
tag:
  - State pattern
  - Clean code
  - Bonnes pratiques
  - Spatie
---

## Introduction

Dans le développement d’applications Laravel, il n'est pas rare de représenter l’état d’un modèle à l’aide de simples
clés
comme `new`, `in_progress` ou `end`. Si cette approche semble efficace à première vue, elle montre rapidement ses
limites dès que la
complexité métier augmente. Elle conduit à un code difficile à maintenir, où la logique se disperse entre différents
contrôleurs, services ou conditions.

## Limitation

Les limitations de cette approche sont nombreuses : duplication de structures conditionnelles, décentralisation des
responsabilités liées à l’état, complexité accrue lors de la transition vers un nouvel état, et logique de transition
dispersée, rendant la maintenance difficile. Certes, c’est faisable, mais un manque de rigueur ou de connaissance
approfondie du projet peut facilement conduire à des bugs.

À moins d’avoir une couverture de tests exhaustive, une documentation toujours à jour, et un processus d’intégration des
nouveaux développeurs parfaitement maîtrisé, il est essentiel de réduire la complexité cognitive. Moins il y a de choses
à savoir, moins il y a de risques d’introduire des erreurs.

Un développeur qui travaille depuis des années sur le même projet sait instinctivement pourquoi, comment, et où l’on
passe d’un état `new` à `in_progress`. Le nouveau développeur, lui, devra l’apprendre. Alors, simplifions-lui la tâche.

## Remédiation

Avant de proposer d’emblée le fameux State Pattern, il est essentiel de définir les différents types d’états que l’on
peut rencontrer. En effet, tous les états ne se valent pas et ne nécessitent pas le même niveau de complexité dans leur
gestion.

D’après mon expérience, j’ai identifié trois familles d’états, chacune correspondant à des besoins métiers
spécifiques. Comprendre ces distinctions permet de choisir la bonne approche avant même de penser à l’implémentation
technique.

### Le statut

Le **statut** (ou état) se caractérise par sa **mutabilité**, évoluant d’un état à un autre de manière structurée. Cette
capacité à changer est ce qui le distingue des autres concepts métiers. Il incarne des comportements spécifiques et peut
déclencher des actions comme l’envoi d’e-mails, la gestion des stocks ou la validation de règles complexes.

Chaque transition d’état s’accompagne d’effets secondaires essentiels à la cohérence du système (notifications, mises à
jour de données, vérifications conditionnelles).

Ce fonctionnement dynamique est courant dans les applications métier complexes et justifie pleinement l’utilisation du
State Pattern, qui permet de centraliser la logique de transition et de rendre le code plus clair, maintenable et
évolutif.
