#!/usr/bin/env bash
set -Eeo pipefail

wait-for-it web:8000 -t 30 -- wait-for-it browserless:3000 -t 30

exec "$@"
