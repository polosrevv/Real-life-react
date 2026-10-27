function ProductCard({ name, price, salesPrice, stock }) {
  const finalPrice = salesPrice ?? price
  const isSoldOut = stock === 0
{/* yes I know what the $ does now */}
  const stockMessage = isSoldOut ? 'Sold out': stock <= 5? `Only ${stock} left` : 'In stock'

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p className={`stock-status${isSoldOut ? ' is-sold-out' : stock <= 5 ? ' is-low' : ''}`}>
        {stockMessage}
      </p>

      <div className="product-prices">
        {salesPrice != null && <span className="original-price">${price.toFixed(2)}</span>}
        <span>${finalPrice.toFixed(2)}</span>
        {salesPrice != null && <span className="sale-label">Sale</span>}
      </div>

      {finalPrice >= 35 && <p className="free-shipping">Free shipping</p>}
      <button type="button" disabled={isSoldOut}>
        {isSoldOut ? 'Sold out' : 'Add to cart'}
      </button>
    </div>
  )
}

export default ProductCard

