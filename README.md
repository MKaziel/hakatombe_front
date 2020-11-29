# hakatombe_front
The front dev for hakatombe web application
### Indication avancement
Actuellement sur le client front du projet hakatombe, celui la page d'accueil est complètement opérationnelle.
La page d'accueil:
* est connectée à l'API en requêtant l'URL suivant : http://localhost:3000
* Récupérer les projets et équipes enregistrés
* Affiche pour chaque projet:
  + Son nom
  + Sa description
  + l'équipe qui l'a développée (si elle est bien présente dans l'API)

# Hakatombe
Project Developpement : Register for a Hackathon weekend with multiple schools

## Rôles
- Administrator : admin
- Type of Users : 
  + Team Leader : tl
  + Team Member : tm
  + User : user
- Everyone : guest

## Indication pour le .env
Deux fichier .env.sample sont fournis ici:
  - Il faut renommer le premier en ".env" pour permettre à docker de se lancer
  - Il faut renommer le second en ".env" qui se trouve dans le sous-dossier "hakatombe_front", celuic-i permet au client node de démarrer sur un port précis déjà fourni.

# Back Repository
https://github.com/MKaziel/Hakatombe
# Front Repository
https://github.com/MKaziel/hakatombe_front

# Developpeurs
Developped by:
  - Alexandre SZABO
  - Zakia GHOULI
  - Thomas NOMINE 

from IPSSI School

