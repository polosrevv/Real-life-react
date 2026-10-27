import Navbar from './tasks/Navbar'
import ProductCard from './tasks/ProductCard'
import OrderTracker from './tasks/OrderTracker'
import WeatherCard from './tasks/WeatherCard'

function App() {
  return (
    <main>
      <h1>Conditional Rendering Workbook</h1>

      <h2>Task 1: Navbar</h2>
      <Navbar user={null} notifications={0} />

      <h2>Task 2: Product card</h2>
      <ProductCard name="Backpack" price={49.99} salesPrice={39.99} stock={3} />

      <h2>Task 3: Order tracker</h2>
      <OrderTracker restaurant="Noodle House" status="on_the_way" etaMinutes={15} driverName="Sam" />

      <h2>Task 4: Weather card</h2>
      <WeatherCard city="Seattle" tempF={68} condition="rain" windMph={18} />
    </main>
  )
}

export default App
