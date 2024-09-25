-- Crée la base de données graphikaz_db
CREATE DATABASE IF NOT EXISTS graphikaz_db;
USE graphikaz_db;


-- Table Country
CREATE TABLE Country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pays VARCHAR(255) NOT NULL
);

-- Table City
CREATE TABLE City (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ville VARCHAR(255) NOT NULL,
    countryId INT NOT NULL,
    FOREIGN KEY (countryId) REFERENCES Country(id)
);

-- Table Commune
CREATE TABLE Commune (
    id INT AUTO_INCREMENT PRIMARY KEY,
    commune VARCHAR(255) NOT NULL,
    cityId INT NOT NULL,
    FOREIGN KEY (cityId) REFERENCES City(id)
);



-- Table User
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    typeUser VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);



-- Table GraphicServCategory
CREATE TABLE GraphicServCategory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(255) NOT NULL,
    type ENUM('CREATION_GRAPHIQUE') NOT NULL,
    icon VARCHAR(255),
    cover VARCHAR(255)
);

-- Table GraphicServ
CREATE TABLE GraphicServ (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(255) NOT NULL,
    categoryId INT NOT NULL,
    fullDescription TEXT,
    covers JSON,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoryId) REFERENCES GraphicServCategory(id)
);

-- Table DeliZone
CREATE TABLE DeliZone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    countryId INT NOT NULL,
    cityId INT NOT NULL,
    communeId INT NOT NULL,
    montant FLOAT NOT NULL,
    FOREIGN KEY (countryId) REFERENCES Country(id),
    FOREIGN KEY (cityId) REFERENCES City(id),
    FOREIGN KEY (communeId) REFERENCES Commune(id)
);

-- Table GraphicServPack
CREATE TABLE GraphicServPack (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    subTitle VARCHAR(255),
    description TEXT,
    graphicServId INT,
    FOREIGN KEY (graphicServId) REFERENCES GraphicServ(id)
);

-- Table ExecutionDeadline
CREATE TABLE ExecutionDeadline (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numberOfDay INT NOT NULL,
    price FLOAT NOT NULL,
    type ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    graphicServPackId INT UNIQUE,
    FOREIGN KEY (graphicServPackId) REFERENCES GraphicServPack(id)
);

-- Table ExpressExecutionDeadline
CREATE TABLE ExpressExecutionDeadline (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numberOfDay INT NOT NULL,
    price FLOAT NOT NULL,
    type ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    graphicServPackId INT,
    FOREIGN KEY (graphicServPackId) REFERENCES GraphicServPack(id)
);

-- Table GraphicServItem
CREATE TABLE GraphicServItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    type ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    graphicServId INT NOT NULL,
    FOREIGN KEY (graphicServId) REFERENCES GraphicServ(id)
);


-- Table GraphicServOrder (placée avant GraphicServOptionalItem pour éviter l'erreur de clé étrangère)
CREATE TABLE GraphicServOrder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderRef VARCHAR(255) NOT NULL,
    packType ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    deliveryDelay INT NOT NULL,
    orderStatus ENUM('COMPLETED', 'PENDING', 'IN_PROCESS', 'CANCELLED') NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL,
    delizeId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id),
    FOREIGN KEY (delizeId) REFERENCES DeliZone(id)
);

-- Table GraphicServOptionalItem (orderId fait référence à GraphicServOrder)
CREATE TABLE GraphicServOptionalItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    libelle VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    orderId INT,
    graphicServId INT,
    FOREIGN KEY (orderId) REFERENCES GraphicServOrder(id),
    FOREIGN KEY (graphicServId) REFERENCES GraphicServ(id)
);

-- Table GraphicServItemValue
CREATE TABLE GraphicServItemValue (
    id INT AUTO_INCREMENT PRIMARY KEY,
    value VARCHAR(255) NOT NULL,
    valueType ENUM('BASIQUE', 'STANDARD', 'PREMIUM') NOT NULL,
    optionalItemId INT,
    graphicServItemId INT,
    UNIQUE KEY unique_item_value_relation (optionalItemId, graphicServItemId),
    FOREIGN KEY (optionalItemId) REFERENCES GraphicServOptionalItem(id),
    FOREIGN KEY (graphicServItemId) REFERENCES GraphicServItem(id)
);

-- Table Faq
CREATE TABLE Faq (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    graphicServId INT NOT NULL,
    FOREIGN KEY (graphicServId) REFERENCES GraphicServ(id)
);


-- Table OrderService
CREATE TABLE OrderService (
    graphicServOrderId INT NOT NULL,
    graphicServId INT NOT NULL,
    PRIMARY KEY (graphicServOrderId, graphicServId),
    FOREIGN KEY (graphicServOrderId) REFERENCES GraphicServOrder(id),
    FOREIGN KEY (graphicServId) REFERENCES GraphicServ(id)
);

-- Table Transaction
CREATE TABLE Transaction (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount FLOAT NOT NULL,
    transactionRef VARCHAR(255) NOT NULL UNIQUE,
    operator VARCHAR(255) NOT NULL,
    paiementPhoneNumber VARCHAR(255) NOT NULL,
    paiementEmail VARCHAR(255) NOT NULL,
    paiementType ENUM('CASH', 'HALF') NOT NULL,
    paiementStatus ENUM('ACCEPTED', 'PENDING', 'CANCELLED', 'REFUSED') NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    orderId INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES GraphicServOrder(id),
    FOREIGN KEY (userId) REFERENCES User(id)
);


/*

## Explications des tables et des relations :


    -- User : Stocke les informations sur les utilisateurs. Les utilisateurs peuvent passer des commandes (GraphicServOrder) et effectuer des transactions (Transaction).

    -- GraphicServCategory : Catégories des services graphiques, chaque catégorie peut avoir plusieurs services graphiques (GraphicServ).

    -- GraphicServ : Services graphiques disponibles, liés à une catégorie (GraphicServCategory). Un service graphique peut avoir plusieurs packs, items, questions fréquentes, etc.

    -- GraphicServPack : Différents types de packs pour chaque service graphique. Liés aux délais d'exécution (ExecutionDeadline et ExpressExecutionDeadline).

    -- ExecutionDeadline et ExpressExecutionDeadline : Délais d'exécution pour les services graphiques, avec des prix et des durées différentes.

    -- GraphicServItem : Éléments individuels des services graphiques, chaque élément est lié à un service graphique.

    -- GraphicServOptionalItem : Éléments optionnels qui peuvent être ajoutés à une commande de service graphique.

    -- GraphicServItemValue : Valeurs spécifiques des éléments des services graphiques, liées aux éléments optionnels ou aux services graphiques.

    -- Faq : Questions fréquentes pour chaque service graphique.

    -- Country, City et Commune : Tables pour gérer les zones de livraison, chaque commande est associée à une zone de livraison (DeliZone).

    -- DeliZone : Zones de livraison, chaque zone est liée à un pays, une ville et une commune.

    -- GraphicServOrder : Commandes des services graphiques, chaque commande est liée à un utilisateur (User) et à une zone de livraison (DeliZone).

    -- OrderService : Relation entre une commande et les services graphiques inclus dans cette commande.

    -- Transaction : Transactions effectuées pour les commandes, chaque transaction est liée à une commande (GraphicServOrder) et à un utilisateur (User).


*/






