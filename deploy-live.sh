#!/bin/bash

set -e

latestCommit=$(git rev-parse HEAD)
timestamp=$(date -u +%Y%m%d%H%M%SZ)
archiveFile=mathematic.org-built-${latestCommit}-${timestamp}.tar
mkdir -p builds

npm install --no-save --no-audit
npm run build
cd public
git rev-parse HEAD > built-from-git-sha.txt
tar -cvvaf ../builds/${archiveFile} ./*
cd ..

scp builds/${archiveFile} ubuntu@mathematic.vretta.com:~/~mathematic.org-built.tar

ssh ubuntu@mathematic.vretta.com <<- EOF
cd ~
sudo rm -rf /var/www/mathematic.org
sudo mkdir /var/www/mathematic.org
sudo tar -xvvaf '~mathematic.org-built.tar' -C /var/www/mathematic.org
sudo chown -R www-data: /var/www/mathematic.org
sudo chmod -R ug+rw /var/www/mathematic.org

# copy icons to apache's icons dir
# This will fail with permission errors if new icons are added. Do not use sudo
# to circumvent these permission errors, becuase sudo could cause Apache's
# icons to be overridden
cp /var/www/mathematic.org/icons/* /usr/share/apache2/icons/

rm '~mathematic.org-built.tar'
EOF
