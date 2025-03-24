# p-express

This example is named as such because it's what node developers would relate to running an api server. The difference is this example doesn't use express at all, instead it uses the python library fastapi to host an api server. It uses type hints to generate the docs.

This approach could either have the python api spun up as a separate service or it could be spun up in the same container as the node service that needs to make python calls.

## To Run
In one tab, run 
```shell
pnpm start:server
```

In another tab, run
```shell
pnpm start:client
```