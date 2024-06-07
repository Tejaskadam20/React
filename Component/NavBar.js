import React from 'react'

export default function NavBar(props) {
  return (
    <ul className="nav">
    <li>
        <a className="nav-title" href="/">{props.title}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">{props.AboutText}</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Skills</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Contact</a>
    </li>
  </ul>
  )
}
