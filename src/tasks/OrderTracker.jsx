const steps = ['Placed', 'Preparing', 'On the way', 'Delivered']
const statuses = ['placed', 'preparing', 'on_the_way', 'delivered']

function OrderTracker({ restaurant, status, etaMinutes, driverName }) {
  const currentStep = statuses.indexOf(status)
  const statusMessages = {
    placed: 'Order received',
    preparing: 'The kitchen is preparing your food',
    on_the_way: `${driverName} is on the way`,
    delivered: 'Delivered. Enjoy your meal!',
    cancelled: 'Order cancelled',
  }
  const statusMessage = statusMessages[status] ?? 'Order status unavailable'

  return (
    <div className="order-tracker">
      <h3>{restaurant}</h3>
      <p className="order-message">{statusMessage}</p>
      {currentStep >= 0 && (<div className="progress-bar">
          {steps.map((name, index) => (<span key={name} className={`step${index <= currentStep ? ' done' : ''}`}>
              {index <= currentStep ? '✓ ' : ''}{name}
            </span>
          ))}
        </div>
      )}
      {status === 'on_the_way' && (
        <p className="order-eta">Arrives in <strong>{etaMinutes}</strong> min</p>
      )}
      {status === 'delivered' && (<div className="order-action"><p>Rate your order</p>{[1, 2, 3, 4, 5].map((star) => (
            <button className="star-button" key={star} type="button" aria-label={`${star} stars`}>⭐</button>
          ))}
        </div>
      )}
      {status === 'cancelled' && (<div className="order-action"><button className="reorder-button" type="button">Reorder</button></div>)}
    </div>
  )
}

export default OrderTracker