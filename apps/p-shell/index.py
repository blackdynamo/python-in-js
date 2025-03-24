import sys
import json
from pyxirr import xirr

data = json.loads(sys.argv[1])


print(xirr(data["dates"], data["amounts"]))
