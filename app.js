import express from "express";

const app = express();
const port = 3000;

app.get("/api/method1", (req, res) => {
  res.json({ message: "Respuesta del metodo 1" });
});

app.get("/api/method2", (req, res) => {
  res.json({ message: "Respuesta del metodo 2" });
});

app.get("/api/method3", (req, res) => {
  res.json({ message: "Respuesta del metodo 3" });
});

// Solo inicia el servidor si no estamos en modo de prueba
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

export default app;
