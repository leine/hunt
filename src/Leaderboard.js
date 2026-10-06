// @flow

import './Leaderboard.css';
import React, { useState } from 'react';

// Replace with your actual deployed Worker URL
const WORKER_URL = 'https://sf-scav-hunt-leaderboard-proxy.vananish.workers.dev';

export default function Leaderboard(): React.MixedElement {
  const [password, setPassword] = useState('');
  const [rows, setRows] = useState<?Array<Array<string>>>(null);
  const [error, setError] = useState<?string>(null);
  const [loading, setLoading] = useState(false);

  async function handleUnlock(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.status === 401) {
        setError('Wrong password.');
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError('Something went wrong loading the leaderboard. Try again shortly.');
        setLoading(false);
        return;
      }

      const data = await res.json();
      setRows(data.values || []);
    } catch (err) {
      setError('Could not reach the leaderboard. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  // Not yet unlocked: show the password form
  if (!rows) {
    return (
      <div className="leaderboard-gate">
        <form onSubmit={handleUnlock}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="leaderboard-password-input"
            autoFocus
          />
          <button type="submit" disabled={loading} className="leaderboard-submit">
            {loading ? 'Checking…' : 'Unlock'}
          </button>
          {error && <p className="leaderboard-error">{error}</p>}
        </form>
      </div>
    );
  }

  // Unlocked: render the table
  const [headerRow, ...dataRows] = rows;

  return (
    <div className="leaderboard-table-wrap">
      <table className="leaderboard-table">
        {headerRow && (
          <thead>
            <tr>
              {headerRow.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}