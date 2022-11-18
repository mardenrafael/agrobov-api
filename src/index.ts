import "dotenv/config";
import express from "express";
import App from "./App";

const PORT = parseInt(process.env.PORT!) || 3030;

const server = new App(express(), PORT);

server.start();
