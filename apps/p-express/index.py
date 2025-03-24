from fastapi import FastAPI
from pydantic import BaseModel
from pyxirr import xirr


class Props(BaseModel):
    dates: list[str]
    amounts: list[float]


app = FastAPI()


@app.post("/xirr/")
async def calc_xirr(props: Props):
    return xirr(props.dates, props.amounts)
