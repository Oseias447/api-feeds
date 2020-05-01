const request = require("supertest");
const app = require("../../src/server");

describe("Feed Endpoints", () => {
  it("should create a new feed", async () => {
    const res = await request(app).post("/feed").send({
      name: "Carlos",
      avatar:
        "https://avatars2.githubusercontent.com/u/35711742?s=460&u=b4fb1f63f47b84db3785b063903d17e817f26829&v=4",
      url_image:
        "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/05/r16x9/20190523084816_1200_675_-_programacao.jpg",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("feed");
  });

  it("should fetch all feeds", async () => {
    const res = await request(app).get("/feeds");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("feeds");
    expect(res.body.feeds).toHaveLength(1);
  });

  it("should update a feed", async () => {
    const res = await request(app).put("/feed/1").send({
      name: "João",
      avatar:
        "https://avatars2.githubusercontent.com/u/35711742?s=460&u=b4fb1f63f47b84db3785b063903d17e817f26829&v=4",
      url_image:
        "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/05/r16x9/20190523084816_1200_675_-_programacao.jpg",
    });

    expect(res.statusCode).toEqual(200);
  });

  it("not should update a feed id not found", async () => {
    const res = await request(app).put("/feed/2").send({
      name: "João",
      avatar:
        "https://avatars2.githubusercontent.com/u/35711742?s=460&u=b4fb1f63f47b84db3785b063903d17e817f26829&v=4",
      url_image:
        "https://img.olhardigital.com.br/uploads/acervo_imagens/2019/05/r16x9/20190523084816_1200_675_-_programacao.jpg",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty(
      "error",
      "Feed não encontrado tente novamente"
    );
  });

  it("should delete a feed", async () => {
    const res = await request(app).delete("/feed/1");
    expect(res.statusCode).toEqual(204);
  });

  it("not should delete a feed id not found", async () => {
    const res = await request(app).delete("/feed/2");

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
    expect(res.body).toHaveProperty("error", "Falha ao excluir Feed");
  });
});
