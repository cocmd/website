#!/bin/bash

# Define variables
GITHUB_USER="cocmd"
REPO_NAME="cocmd"
RELEASE_TAG="v1.0.8"
DEB_PACKAGE_NAME="cocmd-debian-x11-amd64.deb"

# Download the .deb package from the GitHub release
wget "https://github.com/${GITHUB_USER}/${REPO_NAME}/releases/download/${RELEASE_TAG}/${DEB_PACKAGE_NAME}"

# Install the .deb package
sudo dpkg -i ${DEB_PACKAGE_NAME}

# Install any missing dependencies (if needed)
sudo apt-get -f install


# Clean up the downloaded .deb file
rm ${DEB_PACKAGE_NAME}

echo "Cocmd has been successfully installed!"

cocmd setup