CREATE TABLE users(
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name                text NOT NULL,
    created_at          timestamptz NOT NULL DEFAULT now(),
    updated_at_client   timestamptz NOT NULL,
    updated_at_server   timestamptz NOT NULL,
    state               text NOT NULL DEFAULT 'active' CHECK (state = 'active' or state = 'ban' or state = 'delete'),
    type                text NOT NULL DEFAULT 'user' CHECK (type = 'user' or type = 'admin'),
    email               text NOT NULL UNIQUE,   
    password_hash       text NOT NULL,
    lang                text NOT NULL DEFAULT 'ru',
    time_zone           text
)