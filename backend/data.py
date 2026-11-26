import os
import psycopg

conn = psycopg.connect(os.environ["DATABASE_URL"])

def create(name, updated_at_client, updated_at_server, state, user_type, email, password_hash, lang, time_zone):
    conn.execute("INSERT INTO users" + 
                "(name, updated_at_client, updated_at_server, state, type, email, password_hash, lang, time_zone)" +
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)", 
                (name, updated_at_client, updated_at_server, state, user_type, email, password_hash, lang, time_zone))
    conn.commit()

def get_all():
   return conn.execute("SELECT * FROM users").fetchall()

def get_by_id(id):
    return conn.execute("SELECT * FROM users WHERE id = %s", (id,)).fetchall()