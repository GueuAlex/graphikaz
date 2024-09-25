-- Script SQL de création des données pour MySQL

USE graphikaz_db;

-- Insertion d'un utilisateur
INSERT INTO User (name, email, typeUser, password, createdAt)
VALUES ('John Doe', 'john.doe@example.com', 'Regular', 'password123', NOW());

-- Insertion des catégories de services graphiques
INSERT INTO GraphicServCategory (libelle, type, icon, cover)
VALUES 
('Design & Creativ', 'CREATION_GRAPHIQUE', 'bi bi-bezier', 'https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/creative-graphic-design-agency-hire-pSTV9THhIFAhiO51U08RIWqfZUhlyD.jpg'),
('Development & IT', 'CREATION_GRAPHIQUE', 'bi bi-code-slash', 'https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/programmation-informatique-1536x1024-1-fiWvqGU6PWEBz24eGt1WKbiMEsCadz.jpeg'),
('Digital Marketing', 'CREATION_GRAPHIQUE', 'bi bi-megaphone-fill', 'https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/categories_cover/marketing-digital-Iz8htIxBSAfp1QQGnK14NSDxkvk5vv.webp');

-- Insertion d'un service graphique
INSERT INTO GraphicServ (libelle, categoryId, fullDescription, covers, createdAt)
VALUES (
    'Je concevrai votre logo créatif en 24 heures', 
    1, 
    '<div>✨🔥</div><p>Bonjour🙌🏼 🙌🏼, je m\'appelle Vivek, un graphiste chevronn&eacute; avec plus de<span style="background: #ffecd1; text-decoration: underline;">&nbsp;</span><strong><span style="background: #ffecd1;">13 ans d\'exp&eacute;rience.</span></strong>&nbsp;Avec une passion pour la cr&eacute;ativit&eacute; et un sens aigu du design, j\'ai cr&eacute;&eacute; des visuels captivants qui laissent une impression durable.</p><p>&nbsp;</p><p>"Collaborons pour &eacute;lever votre marque et faire briller votre id&eacute;e"</p><p>&nbsp;</p><p><strong><span style="background: #ffecd1;">n\'h&eacute;sitez pas &agrave; parcourir mon portfolio en direct pr&eacute;sentant les commentaires &eacute;logieux des clients.</span></strong></p><p>&nbsp;</p><p><strong>Veuillez s&eacute;lectionner le pack STANDARD ou PREMIUM pour obtenir les meilleurs r&eacute;sultats similaires &agrave; mon portfolio.</strong></p><p>&nbsp;</p><p><strong>Types de logos que je cr&eacute;e</strong></p><p>&nbsp;</p><p><strong><span style="background: #ffecd1;">Minime | Bas&eacute; sur du texte | Silhouettes | Mascotte | Personnage/Dessin anim&eacute; | Caricature| Conceptions personnalis&eacute;es | podcasts | Tik Tok | Vous tube | jeux | Tic</span></strong></p><p>&nbsp;</p><p><strong>Pourquoi moi?</strong></p><p>&nbsp;</p><ol style="list-style-type: none;"><li style="list-style-type: decimal;">prestataire Exp&eacute;riment&eacute;</li><li style="list-style-type: decimal;">Concepteur polyvalent</li><li style="list-style-type: decimal;">Communication rapide (&nbsp;<strong><span style="background: #ffecd1;">disponible 24h/24 et 7j/7</span></strong>&nbsp;)</li><li style="list-style-type: decimal;">Fichiers imprimables/Fichiers vectoriels</li><li style="list-style-type: decimal;">Des cr&eacute;ations originales et uniques</li><li style="list-style-type: decimal;">Maquette 3D</li><li style="list-style-type: decimal;">Kit de m&eacute;dias sociaux</li><li style="list-style-type: decimal;">Transparence du logo</li><li style="list-style-type: decimal;">Mod&egrave;les de papeterie</li><li style="list-style-type: decimal;">Propri&eacute;t&eacute; compl&egrave;te de votre conception avec droits d\'auteur</li></ol><p>&nbsp;</p><p><strong><span style="background: #ffecd1;">Je propose des r&eacute;visions illimit&eacute;es jusqu\'&agrave; ce qu\'un client soit satisfait jusqu\'&agrave; ce que la commande soit termin&eacute;e.</span></strong></p><br/><p><strong>NOTE :</strong></p><p>&nbsp;</p><ul style="list-style-type: none;"><li style="list-style-type: disc;">Les conceptions pr&eacute;sent&eacute;es dans mon &eacute;chantillon de service sont des packages Standard ou Premium, veuillez s&eacute;lectionner le package en fonction de vos besoins.</li></ul><p>&nbsp;</p><ul style="list-style-type: none;"><li style="list-style-type: disc;">Vous devez finaliser 1 logo pour la livraison finale.</li></ul><p>&nbsp;</p><ul style="list-style-type: none;"><li style="list-style-type: disc;">Le dimanche est jour de repos.</li></ul><p>&nbsp;</p><p>&nbsp;</p><p>Obtenez une CONSULTATION GRATUITE. Allez-y et laissez un message.</p><br/><table style="border-collapse: collapse; width: 100.161%; height: 72.3438px;" border="1"><colgroup><col style="width: 22.7638%;"><col style="width: 77.2362%;"></colgroup><tbody><tr style="height: 36.1719px;"><td><span style="color: #7e8c8d;">Style de logo</span></td><td><span style="color: #7e8c8d;">Format de fichier</span></td></tr><tr style="height: 36.1719px;"><td>Minimaliste</td><td>AI, JPG, JPEG, PNG, PSD, PDF, ESP, SVG</td></tr></tbody></table>', 
    '["https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%204_mbsv7v.jpg", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/110928855/original/c3fc46f6ac4d0287a2511cf5b06144aaa499326d/do-minimalist-logo-design.jpg", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/110928855/original/7ca6bdb0455fd2b541a96b9e7c566da52930168a/do-minimalist-logo-design.jpg", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/110928855/original/8b65c55172f99d57b28fe8030a9d6695f2f21a6f/do-minimalist-logo-design.jpg", "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230405/PORTFOLIO%206_qvi1ab.jpg"]', 
    NOW()
);


-- Insertion des items de services graphiques
INSERT INTO GraphicServItem (libelle, price, type, graphicServId)
VALUES 
('Transparence de logo', 500, 'BASIQUE', 1),
('Fichier vectoriel', 600, 'STANDARD', 1),
('Fichier imprimable', 700, 'BASIQUE', 1),
('Maquette 3D', 800, 'STANDARD', 1),
('Conceptions de papeterie', 1500, 'PREMIUM', 1),
('Kit réseaux sociaux', 1500, 'STANDARD', 1),
('Nombre de concepts inclus', 2000, 'BASIQUE', 1),
('Revision', 3000, 'BASIQUE', 1);

-- Insertion des items optionnels de services graphiques
INSERT INTO GraphicServOptionalItem (libelle, price, graphicServId)
VALUES 
('Fichier source', 1000, 1),
('Offre optionnel 1', 4000, 1),
('Offre optionnel 2', 3000, 1);

-- Insertion des valeurs pour les items de services graphiques
INSERT INTO GraphicServItemValue (value, valueType, graphicServItemId)
VALUES 
('2', 'BASIQUE', 7),
('4', 'STANDARD', 7),
('6', 'PREMIUM', 7),
('1', 'BASIQUE', 8),
('2', 'STANDARD', 8),
('3', 'PREMIUM', 8);