import app from "./src/app";
import { calculateDiscount } from "./src/utils";

import request from "supertest";

describe("App", () => {
  it("should calculate discount", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(10);
  });
  it("should return a string", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
  });
});
