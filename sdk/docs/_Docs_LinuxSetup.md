---
title: Linux Setup
section: Docs
order: 2
---

### Yarn Setup

If you have not already done so, configure your bash shell to run globally installed yarn commands.

#### Configure your bash shell

Add the following to your `~/.bashrc` file:

```
export PATH="$PATH:$HOME/.config/yarn/global/node_modules/.bin"
```

#### Load your updated bash configuration

Either start a new instance or load the updated configuration by running the following command:

```
source ~/.bashrc
```

### Docker Setup

If you have not already completed the ["Post-installation steps for Linux"](https://docs.docker.com/install/linux/linux-postinstall/), you will need to perform the following steps to allow a non-root user to pull images from docker:

#### Create the docker group

```
sudo groupadd docker
```

#### Add the current user to the docker group

```
sudo usermod -aG docker $USER
```

#### Ensure the new user membership is evaluated

Log out and log back in so that your group membership is re-evaluated.

- _If testing on a virtual machine, it may be necessary to restart the virtual machine for changes to take effect._

- _On a desktop Linux environment such as X Windows, log out of your session completely and then log back in._

#### Run the docker test command

Download a test image and run it in a container to verify the current user is authorized to run docker commands.

```
docker run hello-world
```
