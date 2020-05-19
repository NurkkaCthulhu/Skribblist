-- Author: Anu Malm
-- Date  : 2020-05-04

-- Create new table for Skribblist database
CREATE TABLE wordlist (
    id          SERIAL PRIMARY KEY,
    words       TEXT,
    code        VARCHAR(12),
    info        TEXT,
    list_name   VARCHAR(64) NOT NULL,
    public      BOOLEAN DEFAULT false,
    likes       INT DEFAULT 0
);

-- Insert some default data into wordlist table
INSERT INTO wordlist (
    words,
    code,
    info,
    list_name
)
VALUES (
    'hello world,computer,fortnite,batman,taikaviitta',
    'epicCodeBruh',
    'This is the best list that there is.',
    'Random list'
);

INSERT INTO wordlist (
    words,
    code,
    info,
    list_name
)
VALUES (
    'tietokone,krapula,vappu,galaksi,naruto',
    'thisMineCode',
    '',
    'Vappu lista'
);

-- End of file
