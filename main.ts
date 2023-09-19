import fast from 'https://deno.land/x/fast@5.4.0/mod.ts'
import { Country, State, City } from 'npm:country-state-city'
import { error_handle } from './utils.ts'

const app = fast()

app.get('/', () => Response.json({
  message: 'Welcome to Countries, States, and Cities API',
  repo: 'https://github.com/omar2205/countries-api',
}))

app.get('/country/all', () => {
  return Country.getAllCountries()
})

app.get('/country/:country_code', ({ params }) => {
  const { country_code } = params

  const country = Country.getCountryByCode(country_code.toUpperCase())

  if (!country) return error_handle('No country. Check country code', 400)

  return country
})

app.get('/country/:country_code/state/all', ({ params }) => {
  const { country_code } = params

  const state = State.getStatesOfCountry(country_code.toUpperCase())

  if (!state.length)
    return error_handle('Not states. Check country code', 400)

  return state
})

app.get('/country/:country_code/state/:state_code', ({ params }) => {
  const { country_code, state_code } = params

  const state_cities = State.getStateByCodeAndCountry(
    state_code.toUpperCase(), country_code.toUpperCase()
  )

  if (!state_cities)
    return error_handle('No state. Check country code or state code', 400)

  return state_cities
})

app.get('/country/:country_code/state/:state_code/cities', ({ params }) => {
  const { country_code, state_code } = params

  const state_cities = City.getCitiesOfState(
    country_code.toUpperCase(), state_code.toUpperCase()
  )

  if (!state_cities.length)
    return error_handle('Not cities. Check country or state codes', 400)

  return state_cities
})

app.get('/country/:country_code/city/all', (ctx) => {
  const cities = City.getCitiesOfCountry(ctx.params.country_code)

  if (!cities)
    return error_handle('Not cities. Check country code', 400)

  return cities
})

app.serve()