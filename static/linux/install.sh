#!/bin/bash

# Define variables
GITHUB_USER="cocmd"
REPO_NAME="cocmd"
RELEASE_TAG="v1.2.3.4"
DEB_PACKAGE_NAME="cocmd-debian-x11-amd64.deb"

# Install libssl1.1 (if needed)

sudo apt-get update
sudo apt-get install -y libssl-dev


# Download the .deb package from the GitHub release
wget "https://github.com/${GITHUB_USER}/${REPO_NAME}/releases/download/${RELEASE_TAG}/${DEB_PACKAGE_NAME}"

# Install the .deb package
sudo dpkg -i ${DEB_PACKAGE_NAME}

# Install any missing dependencies (if needed)
sudo apt-get -f install -y

# Clean up the downloaded .deb file
rm ${DEB_PACKAGE_NAME}

# Add cocmd to the user's PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

echo "Cocmd has been successfully installed and added to your PATH!"
