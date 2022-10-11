import "dotenv/config";
import express from "express";
import App from "./app";

const PORT = parseInt(process.env.PORT!);

const server = new App(express(), PORT, "0.0.0.0");

