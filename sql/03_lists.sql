CREATE TABLE lists(
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name                text NOT NULL,
    created_at          timestamptz NOT NULL DEFAULT now(),
    updated_at_client   timestamptz NOT NULL,
    updated_at_server   timestamptz NOT NULL,
    archived_at         timestamptz,
    icon                text,
    owner_id            uuid NOT NULL REFERENCES users (id),
    folder_id           uuid REFERENCES folders (id) ON DELETE SET NULL,
    is_system           boolean NOT NULL DEFAULT false
)