from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


meals = [
    {
        "Name": "Ground Turkey",
        "Protein": 12,
        "Carbs": 1,
        "Fats": 2
    },
    {
        "Name": "Ground Beef",
        "Protein": 11,
        "Carbs": 2,
        "Fats": 4
    }
]

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Hey this is your sample."}

# Our Get method for our meals
@app.get("/meals", tags=["meals"])
async def get_meals() -> dict:
    return {"data": meals}

# Our Post method for our meals
@app.post("/meals", tags=["meals"])
async def post_meals(meal: dict) -> dict:
    meals.append(meal)
    return {"data": {"Your meal was added!"}}