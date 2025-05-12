const express = require("express");
const app = express();
const cors = require("cors");
const StockMetodos = require("./stockMetodos");

app.use(cors());
app.use(express.json());

const stockMetodos = new StockMetodos();


app.get("/stock", async (req, res) => {
  try {
    const stock = await stockMetodos.cargarStock(); 
    if (stock !== null) {
      res.json({ stock_prub: stock }); 
    } else {
      res.status(404).send("No se encontró el stock");
    }
  } catch (error) {
    res.status(500).send("Error al obtener el stock");
  }
});

app.post("/stock", async (req, res) => {
  try {
    const { stock_prub } = req.body;

    if (stock_prub === undefined) {
      return res.status(400).send("Debe proporcionar el valor del stock_prub");
    }

    const resultado = await stockMetodos.guardarStock(stock_prub);
    if (resultado) {
      res.send("Stock guardado correctamente");
    } else {
      res.status(500).send("Error al guardar el stock");
    }
  } catch (error) {
    res.status(500).send("Error al procesar la solicitud");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




