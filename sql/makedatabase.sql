-- SQL script for making neccessary database and table
CREATE DATABASE IF NOT EXISTS player_info;
USE player_info;
CREATE TABLE players (
    username varchar(64),
    playstyle varchar(64)
);