#!/usr/bin/env bash
set -e # exit when any command fails

BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
LIGHTGREEN='\033[1;32m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color
USER=$(whoami)
USERDB="${USER}.sql.xz"

function fail {
  printf "${RED}$1${NC}\n"
  exit 1
}

function announce {
  printf "${YELLOW}$1...${NC}\n"
}

function success {
  printf "${GREEN}$1!${NC}\n"
}

printf "Let's update the ${RED}Frontend${NC}!\n"
announce "Going to ~/alphacontainer/"
cd ~/alphacontainer/ || fail "Sorry, I can't go to the alphacontainer directory!"

announce "Fetching latest changes"
git fetch origin master

announce "Resetting any changes"
git reset --hard origin/master

announce "Pulling files"
git pull
success "Updating was successful"

announce "Installing dependencies"
CI=true npm ci

announce "Testing code"
CI=true npm test || fail "Tests failed! Exiting..."

announce "Building..."
CI=true npm run build

success "Build was successful"
