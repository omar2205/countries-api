# Countries, States, and Cities API

This is a Deno server that provides an API for retrieving information about countries, states, and cities.

## Usage

Here are the API endpoints, all are GET requests.

| Endpoint                                        | Description                                          |
| ----------------------------------------------- | ---------------------------------------------------- |
| /                                               | Welcome message and repository link                  |
| /country/all                                    | Get all countries                                    |
| /country/:country_code                          | Get a country by country code                        |
| /country/:country_code/state/all                | Get all states of a country                          |
| /country/:country_code/state/:state_code        | Get state by state code and country code             |
| /country/:country_code/state/:state_code/cities | Get cities of a state by state code and country code |

### Running the API

To run this API, you need to have Deno installed. You can install it by following the instructions [here](https://deno.land/#installation).

Once Deno is installed, you can run it like this:

```
$ deno run --allow-net main.ts
```
