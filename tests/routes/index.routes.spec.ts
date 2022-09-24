import { describe, expect, it } from "vitest"
import supertest from "supertest";
import { app } from "../../src/app";

describe("test sample", () => {
  it("should return true", async () => {
    const response = await supertest(app)
      .get('/')

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      "message": "hello world"
    })
  })
})