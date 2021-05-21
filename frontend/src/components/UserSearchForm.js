export default function UserSearchForm({ username, setUsername }) {
  return (
    <input
      type="text"
      value={username}
      onChange={event => setUsername(event.target.value)}
    />
  )
}
