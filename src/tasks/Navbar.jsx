function Navbar({ user, notifications = 0 }) {
  return (
    <nav className="navbar">
      <span className="logo">MyApp</span>
      <div className="navbar-actions">
        {user?.role === 'admin' && <span className="admin">Admin dashboard</span>}
        {notifications > 0 && (<span className="notifications" aria-label={`${notifications} notifications`}>🔔 {notifications > 9 ? '9+' : notifications}</span>)}
        {user ? (<><span className="welcome">Hi, {user.name}</span><button type="button">Log out</button></>) : (
          <>
            <button className="log-in" type="button">Log in</button>
            <button className="sign-up" type="button">Sign up</button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
