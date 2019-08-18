---
layout: post
title:  "Mes Applications"
date:   2018-12-01 17:34:11 +0100
categorie: Programmation
author : Marcus
description : J'adore bidouiller, concevoir et fabriquer des choses. Pour moi la programmation est donc un régal !
---

Laissez moi vous expliquer mes choix d'architecture pour le développement des mes applications.

### AngularJS

Ce sont des applications web écrites en javascript qui ne nécessitent le chargement que d'une seule page contenant toutes les ressources nécessaire au fonctionnement de l'application (js et css). La navigation se fait alors sans changer d'emplacement sur le serveur. Et toutes les ressources chargées après le chargement initial de la page se fait en arrière plan grâce à des requêtes
[AJAX](https://fr.wikipedia.org/wiki/Ajax_%28informatique%29).
# Titre 1
![](https://tecorb.com/wp-content/uploads/2017/01/angularjs-rails-asynchrous-diagram1.png){: .center-image }

J'ai découvert le framework  [AngularJS](https://fr.wikipedia.org/wiki/AngularJS) développé par Google qui est très puissant et facile à prendre en main pour développer des applications monopages (quand on a déjà programmer avant...).


## Titre 2
Il utilise l'architecture [MVC](https://fr.wikipedia.org/wiki/Modèle-vue-contrôleur) ou Modèle-Vue-Contrôleur.

- Un Contrôleur est une classe qui se charge des interactions avec l'utilisateur.
- Un Modèle est une classe qui gère les données à afficher.
- Et un une Vue qui contient la présentation de l'interface graphique.

*(Oui bon ce n'est pas dans l'ordre des initiales mais c'est l'ordre le plus logique ! Car le contrôleur gère l'interaction d'un utilisateur, demande des données au modèle et met en forme la vue pour rendre à l'utilisateur ce qu'il demande... Renommons ça le CMV ! Hmm c'est moins classe...)*

### Hébergement

Pour ce qui est de l'hébergement, j'ai opté pour [Github Pages](https://pages.github.com) qui permet d'héberger des sites statiques. Ceci ne pose pas de problèmes en soit pour des applications monopages. Mais vous pouvez oublier php, nodeJS, base de données, et tout ce qui permet de générer du contenu de manière dynamique sur le serveur. Bref, oubliez le [Back-End](https://fr.wikipedia.org/wiki/Backend), tout se passe sur le [Front-End](https://fr.wikipedia.org/wiki/Frontal_serveur).

Afin de permettre à l'utilisateur de conserver ses données sans avoir à les stocker sur le serveur, donc à recouvrir à système de connexion/compte en ligne. J'ai du opté pour un bon vieux système de sauvegarde dans des fichiers.

Le client peut enregistrer son projet à tous moment et peut l'ouvrir sur le serveur quand il le décide.
C'est donc le client qui est responsable de la sauvegarde de ses données et on peut se passer de bases données et de gros scripts en Back-End pour enregistrer les données du client sur le serveur. Pas de cookies, de perte de mot de passe, de newlesters... Bref on s'abstient de toutes les joies de l'administration d'un serveur...

N'importe qui peut utiliser l'application sans avoir à créer de compte, peut partager un de ses projets tout simplement en envoyant par mail son fichier de données.

En tout cas retenons l'essentiel de l'hébergement sur Github Pages : **c'est gratuit !** (enfin pour l'instant, rappellont que Microsoft vient de racheter Github...).
