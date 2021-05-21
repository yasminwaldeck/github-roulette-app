import { useState } from 'react'

export default function UserSearch() {
  const [username, setUsername] = useState('')

  return (
    <form>
      <label>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
    </form>
  )
}
