function WeatherCard({ city, tempF, condition, windMph }) {
  const clothingAdvice = tempF <= 32 ? 'Freezing: heavy coat, hat and gloves': tempF <= 50? 'Cold: wear a jacket': tempF <= 75? 'Nice: a light layer is fine' : 'Hot: shorts and plenty of water'
  const conditionIcons = { sunny: '☀️', cloudy: '☁️', rain: '🌧️', snow: '❄️' }
  const conditionIcon = conditionIcons[condition] ?? '◌'
  const showUmbrella = condition === 'rain'
  const alertMessage = condition === 'snow' && tempF <= 32 ? 'Check for school delays' : windMph >= 25? 'Wind advisory': null

  return (
    <div className="weather-card">
      <h3>{city}: {tempF}°F</h3>
      <p className="weather-condition" aria-label={condition}>
        {conditionIcon} {condition}
      </p>
      <p className={`clothing-advice temp-${tempF <= 32 ? 'freezing' : tempF <= 50 ? 'cold' : tempF <= 75 ? 'mild' : 'hot'}`}>
        {clothingAdvice}
      </p>
      {showUmbrella && <p className="umbrella-advice">☔ Bring an umbrella</p>}
      {alertMessage && <p className="alert-banner">⚠️ {alertMessage}</p>}
      <p className="wind-speed">Wind: {windMph} mph</p>
    </div>
  )
}

export default WeatherCard