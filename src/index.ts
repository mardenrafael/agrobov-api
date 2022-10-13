import "dotenv/config";
import express from "express";
import App from "./app";

const PORT = parseInt(process.env.PORT!) || 3030;

const server = new App(express(), PORT);

server.start();

