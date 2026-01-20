Project: Scalable Todo-Backend Engine
Status: Architecture Phase | Lead: Gemini (AI Thought Partner) | Developer: Willys Sadi Arnel

==> Objectifs du Projet
Développer une API robuste de gestion de tâches qui démontre une maîtrise du Backend (Express), de la Persistance (Supabase) et de l'Infrastructure (Docker). Ce projet doit être déployable en une seule commande.

==> Spécifications Techniques (Stack)
Runtime: Node.js (v20+)
Framework: Express.js
Database & Auth: Supabase (PostgreSQL)
Containerization: Docker & Docker Compose
Proxy/Web Server: Nginx (pour le Reverse Proxy)
CI/CD: GitHub Actions (Linting & Docker Build test)

==> User Stories & Roadmap (To-Do)
=== Phase 1 : Core Backend (Semaine 1)
[ ] Initialiser le projet Node.js avec TypeScript (ou JS moderne).
[ ] Configurer la connexion avec Supabase.
[ ] Implémente l'authentification (Sign-up/Login via Supabase Auth).
[ ] Créer les endpoints CRUD :
POST /tasks : Créer une tâche.
GET /tasks : Récupérer les tâches de l'utilisateur connecté.
PUT /tasks/:id : Modifier/Terminer une tâche.
DELETE /tasks/:id : Supprimer.

=== Phase 2 : Infrastructure & Docker (Semaine 2)
[ ] Écrire un Dockerfile multi-stage (optimisé pour la taille de l'image).
[ ] Créer un docker-compose.yml incluant :
L'image de l'API.
Un service Nginx pour rediriger le trafic du port 80 vers l'API.
[ ] Gérer les secrets (Clés API Supabase) via un fichier .env.

=== Phase 3 : Qualité & Automatisation (Bonus)
[ ] Ajouter un script de Validation des données (Joi ou Zod).
[ ] Configurer un Workflow GitHub Actions qui se lance à chaque git push.
[ ] Rédiger une documentation API simplifiée.

==> Architecture Cible
[ Client ]  -->  [ Nginx (Port 80) ]  -->  [ Express App (Docker) ]  -->  [ Supabase Cloud ]

==> Le conseil de ton Lead :
Arnel, concentre-toi d'abord sur la propreté de ton code Express. Je veux voir une séparation claire entre tes Routes, tes Controllers et tes Services. Une fois que l'API est solide, on l'enferme dans Docker. C'est ça, la vraie mentalité d'un Backend Engineer.