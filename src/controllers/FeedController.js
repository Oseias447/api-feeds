const express = require("express");
const router = express.Router();

const { celebrate, Segments, Joi } = require("celebrate");

const Feed = require("../models/Feed");

/**
 * Method Index
 */
router.get("/feeds", async (req, res) => {
  try {
    const feeds = await Feed.findAll();

    return res.status(200).json({ feeds });
  } catch (error) {
    return res.status(400).json({ error: "Falha ao listar Feeds" });
  }
});

/**
 * Method Create
 */
router.post(
  "/feed",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      avatar: Joi.string().required(),
      url_image: Joi.string().required(),
    }),
  }),
  async (req, res) => {
    try {
      const feed = await Feed.create(Object.assign(req.body));

      return res.status(201).json({ feed });
    } catch (error) {
      return res.status(400).json({ error: "Falha ao criar novo Feed" });
    }
  }
);

/**
 * Method Update
 */
router.put(
  "/feed/:id",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      avatar: Joi.string().required(),
      url_image: Joi.string().required(),
    }),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  async (req, res) => {
    try {
      const { id } = req.params;

      const feed = await Feed.findOne({ where: { id: id } });

      if (!feed) {
        return res
          .status(400)
          .json({ error: "Feed não encontrado tente novamente" });
      }

      await Feed.update(Object.assign(req.body), {
        where: {
          id: id,
        },
      });

      return res.status(200).json();
    } catch (error) {
      return res.status(400).json({ error: "Falha ao atualiar Feed" });
    }
  }
);

/**
 * Method Delete
 */
router.delete(
  "/feed/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  async (req, res) => {
    const { id } = req.params;

    try {
      const feed = await Feed.findOne({ where: { id: id } });

      feed.destroy();

      res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error: "Falha ao excluir Feed" });
    }
  }
);

module.exports = router;
