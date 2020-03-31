#!/bin/bash
set -ev

openssl aes-256-cbc -K $encrypted_aedd9205a433_key -iv $encrypted_aedd9205a433_iv
-in python-portland-pollution-fdbfcd931162.json.enc -out python-portland-pollution-fdbfcd931162.json
-d;