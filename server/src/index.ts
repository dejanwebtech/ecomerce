import express, { Request, Response } from "express";
import cors from "cors";
import { sampleProducts } from "./data";
const app = express();
app.use(
    cors({
        credentials: true,
        origin: ["http://127.0.0.1:5173"],
    })
);
app.get("/api/products", (req: Request, res: Response) => {
    res.json(sampleProducts);
});

app.get("/api/products/:slug", (req: Request, res: Response) => {
    res.json(sampleProducts.find((x) => x.slug === req.params.slug));
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
