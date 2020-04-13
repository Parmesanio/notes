# Getting Started

* Install [Docker](https://www.docker.com/products/docker-desktop)

---

## Key Words

<details>
<summary>View</summary>

`Docker Client(CLI)`

<details>

Takes our commands, processes them, and sends to the `Docker Server`
</details>

`Docker Server(Daemon)`

<details>

Responsible for creating/modifying images and running/maintaining containers
</details>

`Docker Image`

<details>

Single file with all dependencies and configurations required to run a program

![Docker Image](./assets/dockerImage.png)
</details>

`Docker Container`

<details>

Instance of a `Docker Image`

![Docker Container](./assets/dockerContainer.png)
</details>

`Image Cache`

<details>

This is where any `Docker Images` on our local machine are stored
</details>

`Dockerfile`

<details>

Configuration to define how the `Docker Container` should behave
</details>

</details>

---

## Commands

<details>
<summary>View</summary>

`docker run <image name> <override command>`

<details>

Creates and runs a `Docker Container` using `docker create <image name>` + `docker start <container ID>`

`Docker Server` checks our local machine's `Image Cache` for a `Docker Image` with the given name.  If not on our local machine, then the server reaches out to `Docker Hub` for an image by the given name, downloads, stores it in our `Image Cache`, and uses it to create a `Docker Container`. Either way the program inside the `Docker Container` is ran

Can specify an override command to execute inside of the `Docker Container` instead of the default command

Add `-p externalPort:containerPort` before the <image name> to enable port forwarding
</details>

`docker start <container ID>`
<details>

Restart a stopped container
</details>

`docker system prune`
<details>

Remove all stopped containers, unused networks, and dangling images
>Note: This clears the `Image Cache`
</details>

`docker logs <container ID>`

<details>

Retrieve logs for a specific container
>Note: This does not restart the container, but outputs what the container emitted
</details>

`docker stop <container ID>`

<details>

Gives the container time to shut itself down

If it does not shutdown after 10 seconds, then the kill command is ran
</details>

`docker kill <container ID>`

<details>

Shuts the container down immediately
</details>

`docker exec -it <container id> command`

<details>

Runs another command on a `Docker Container`

Example - Running a redis container and wanting to start the redis-cli:

`docker run redis`

`docker exec -it <container id> redis-cli`

</details>

`docker build .`

<details>

Gives `Dockerfile` to the `Docker CLI` which then uses the `Docker Server` to create a useable `DockerImage`

Can use `docker build -t <docker id>/<project name>:<version> .` to tag the Image
</details>

</details>

---

## Building Custom Images Through Docker Server

![Build Custom Image](./assets/buildImage.png)

1. Create a Dockerfile
    <details>
    
    ![Create Dockerfile](./assets/dockerFile.png)

    </details>

---

## Container Port Mapping

By default no traffic will be redirected to a container

`docker run -p <externalPort>:<containerPort> <image name>`



---

## Docker Compose

Used to start multiple containers at the same time & automate all commands needed to build & start a container

<details>
<summary>What docker-compose does</summary>

![Docker Compose Workflow](./assets/dockerCompose.png)
</details>

1. Create a `docker-compose.yml` file to feed to the `docker-compose CLI`

---

## Docker Volumes

Way of "hot reloading" a docker container when making code changes

---