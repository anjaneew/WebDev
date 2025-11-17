# MongoDB

## 01 Installation and setup

Linux (WSL2)

google > mongodb ubuntu install

find "Install MongoDB Community Edition on Ubuntu"

For this installation- this was the website : https://www.mongodb.com/docs/v7.0/tutorial/install-mongodb-on-ubuntu/

follow instructions:

1. check the version of ubuntu
    ```
    cat /etc/lsb-release
    ```

2. Import the public key (first install gnupg and curl)

    ```
    sudo apt-get install gnupg curl
    ```

3. Import the public key 
```
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
```   

4. Create the list file
```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```   

5. Reload the package database
```
sudo apt-get update
```   

6. Finally Install MongoDB Community Server.
```
sudo apt-get install -y mongodb-org
```   

7. Check versions
```
mongod --version

mongosh --version
```   

8. Check Binaries (Yahoo - linux does that bin path thing automatically)
```
which mongod

which mongosh
```   