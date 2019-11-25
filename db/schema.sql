Create database
if not exists ebayDB;

USE ebayDB;

CREATE TABLE items
(
    id int
    auto_increment not null primary Key,
    item varChar
    (255),
    min_cost int,
    curr_bid int,
    ends_in int,
    image varchar
    (255)
);