# Code

Each block below shows keywords, strings, numbers, functions, types and comments, so the syntax colours can be compared in both modes.

## TypeScript

```ts
// Retry a request with exponential backoff
export async function fetchWithRetry<T>(url: string, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url);
    if (res.ok) return (await res.json()) as T;
    await new Promise((r) => setTimeout(r, 2 ** i * 100));
  }
  throw new Error(`Failed after ${attempts} attempts: ${url}`);
}
```

## Python

```python
from dataclasses import dataclass

@dataclass
class Invoice:
    number: str
    total: float
    paid: bool = False

    def overdue(self, days: int) -> bool:
        # Invoices are due after 30 days
        return not self.paid and days > 30
```

## Rust

```rust
use std::collections::HashMap;

fn word_counts(text: &str) -> HashMap<&str, usize> {
    let mut counts = HashMap::new();
    for word in text.split_whitespace() {
        *counts.entry(word).or_insert(0) += 1;
    }
    counts
}
```

## Go

```go
package main

import "fmt"

type Server struct {
	Name string
	Port int
}

func main() {
	s := Server{Name: "api", Port: 8080}
	fmt.Printf("%s listening on :%d\n", s.Name, s.Port)
}
```

## Bash

```bash
#!/usr/bin/env bash
set -euo pipefail
for host in web-1 web-2 db-1; do
  echo "Checking $host"
  ssh "$host" 'uptime' || echo "unreachable: $host" >&2
done
```

## JSON

```json
{
  "service": "billing",
  "replicas": 3,
  "enabled": true,
  "regions": ["eu-north-1", "eu-west-1"],
  "owner": null
}
```

## SQL

```sql
SELECT c.name, SUM(o.total) AS revenue
FROM customers c
JOIN orders o ON o.customer_id = c.id
WHERE o.created_at >= DATE '2026-07-01'
GROUP BY c.name
ORDER BY revenue DESC
LIMIT 10;
```
