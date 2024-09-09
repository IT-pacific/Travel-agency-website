DATABASE DESIGN
===============

1. Users and Role Management
---------------------------
---------------------------

Users:

id: INT, Primary Key, Auto Increment
username: VARCHAR(255)
email: VARCHAR(255), Unique
password: VARCHAR(255)
created_at: DATETIME
updated_at: DATETIME

Roles:

id: INT, Primary Key, Auto Increment
role_name: VARCHAR(255) (e.g., 'admin', 'customer')

UserRoles:

user_id: INT, Foreign Key (Users.id)
role_id: INT, Foreign Key (Roles.id)

Permissions:

id: INT, Primary Key, Auto Increment
permission_name: VARCHAR(255) (e.g., 'manage_posts', 'view_packages')

RolePermissions:

role_id: INT, Foreign Key (Roles.id)
permission_id: INT, Foreign Key (Permissions.id)


2. Blog Post Management
-----------------------
-----------------------

Posts:

id: INT, Primary Key, Auto Increment
user_id: INT, Foreign Key (Users.id)
title: VARCHAR(255)
slug: VARCHAR(255), Unique
content: TEXT
created_at: DATETIME
updated_at: DATETIME

PostComments:

id: INT, Primary Key, Auto Increment
post_id: INT, Foreign Key (Posts.id)
user_id: INT, Foreign Key (Users.id)
content: TEXT
created_at: DATETIME

PostReplies:

id: INT, Primary Key, Auto Increment
comment_id: INT, Foreign Key (PostComments.id)
user_id: INT, Foreign Key (Users.id)
content: TEXT
created_at: DATETIME


3. Travel Packages and Itineraries
----------------------------------
----------------------------------

Packages:

id: INT, Primary Key, Auto Increment
title: VARCHAR(255)
description: TEXT
price: DECIMAL(10,2)
duration: VARCHAR(50) (e.g., "7 days")
created_at: DATETIME
updated_at: DATETIME

Itineraries:

id: INT, Primary Key, Auto Increment
package_id: INT, Foreign Key (Packages.id)
day_number: INT
title: VARCHAR(255)
description: TEXT


4. Visitor Reactions to Packages
--------------------------------
--------------------------------

PackageBookmarks:

id: INT, Primary Key, Auto Increment
user_id: INT, Foreign Key (Users.id)
package_id: INT, Foreign Key (Packages.id)
created_at: DATETIME

Wishlists:

id: INT, Primary Key, Auto Increment
user_id: INT, Foreign Key (Users.id)
package_id: INT, Foreign Key (Packages.id)
created_at: DATETIME


6. Visitor Messages from Contact Form
-------------------------------------
-------------------------------------

Messages:

id: INT, Primary Key, Auto Increment
name: VARCHAR(255)
email: VARCHAR(255)
country: VARCHAR(255)
message: TEXT
created_at: DATETIME

Entity Relationship Overview
----------------------------
----------------------------

1. Users can have multiple Roles through the UserRoles table.
2. Roles are linked to multiple Permissions through the RolePermissions table.
3. Users can create Posts and interact with them by adding Comments and Replies.
4. Packages contain metadata and have multiple Itineraries.
5. Users can bookmark Packages and add them to Wishlists.
6. Visitors can send messages via the Contact Form, stored in the Messages table.

QUERIES
=======
=======

-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    names VARCHAR(255),
    country VARCHAR(255),
    profile_picture VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Roles table
CREATE TABLE Roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL
);

-- Create UserRoles table
CREATE TABLE UserRoles (
    user_id INT,
    role_id INT,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES Roles(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Permissions table
CREATE TABLE Permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    permission_name VARCHAR(255) NOT NULL
);

-- Create RolePermissions table
CREATE TABLE RolePermissions (
    role_id INT,
    permission_id INT,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES Roles(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES Permissions(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Posts table
CREATE TABLE Posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,  //SET @slug = LOWER(REPLACE(REPLACE(REPLACE(@title, ' ', '-'), '&', 'and'), ',', ''));
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- create PostContentBlocks table 
CREATE TABLE PostContentBlocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    content_type VARCHAR(50) NOT NULL,
    content_data TEXT NOT NULL,
    position INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Create PostComments table
CREATE TABLE PostComments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES Posts(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Create PostReplies table
CREATE TABLE PostReplies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comment_id INT,
    user_id INT,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (comment_id) REFERENCES PostComments(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Create Packages table
CREATE TABLE Packages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create PackageMetadata table
CREATE TABLE PackageMetadata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    package_id INT,
    meta_key VARCHAR(255) NOT NULL,
    meta_value TEXT NOT NULL,
    FOREIGN KEY (package_id) REFERENCES Packages(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Itineraries table
CREATE TABLE Itineraries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    package_id INT,
    day_number INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (package_id) REFERENCES Packages(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create PackageBookmarks table
CREATE TABLE PackageBookmarks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    package_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (package_id) REFERENCES Packages(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Wishlists table
CREATE TABLE Wishlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    package_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (package_id) REFERENCES Packages(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create Messages table
CREATE TABLE Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create company info table
CREATE TABLE CompanyInfo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    mission TEXT NULL,
    vision TEXT NULL,
    history TEXT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Create service table
CREATE TABLE Services (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    thumbnail VARCHAR(255) NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Create partners table
CREATE TABLE Partners (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    logo VARCHAR(255) NULL,
    website_url VARCHAR(255) NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




