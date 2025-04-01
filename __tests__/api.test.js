import request from "supertest";
import app from "../app.js";

describe("API tests", () => {
  it("GET /api/method1 should return correct response", async () => {
    const response = await request(app).get("/api/method1");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Respuesta del metodo 1");
  });

  it("GET /api/method2 should return correct response", async () => {
    const response = await request(app).get("/api/method2");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Respuesta del metodo 2");
  });

  it("GET /api/method3 should return correct response", async () => {
    const response = await request(app).get("/api/method3");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Respuesta del metodo 3");
  });
});
