#!/bin/bash
set -e

# Define variables
GITHUB_USER="cocmd"
REPO_NAME="cocmd"
RELEASE_TAG="v1.0.53"

# Determine host architecture
HOST_ARCH=$(uname -m)

# Define the download URL based on the host architecture
case "$HOST_ARCH" in
    x86_64)
        TARGET="x86_64-unknown-linux-gnu"
        ;;
    i686)
        TARGET="i686-unknown-linux-gnu"
        ;;
    aarch64)
        TARGET="aarch64-unknown-linux-gnu"
        ;;
    armv7l)
        TARGET="armv7-unknown-linux-gnueabihf"
        ;;
    arm)
        TARGET="arm-unknown-linux-gnueabi"
        ;;
    *)
        echo "Unsupported architecture: $HOST_ARCH"
        exit 1
        ;;
esac

# Download the appropriate binary
BINARY_NAME="cocmd-$TARGET"
BINARY_POSTFIX=""
DOWNLOAD_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}/releases/download/${RELEASE_TAG}/${BINARY_NAME}${BINARY_POSTFIX}.tar.gz"


# Create a temporary directory for the download
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"

# Download and extract the binary
wget "$DOWNLOAD_URL"
tar -xzf "${BINARY_NAME}${BINARY_POSTFIX}.tar.gz"

# Make the binary executable
chmod +x cocmd


# move 'cocmd' to path of executables in linux
sudo mv cocmd /usr/local/bin

# Clean up
cd ..
rm -r "$TEMP_DIR"

echo "Cocmd has been successfully installed to $BIN_DIR!"