---
sidebar_position: 0
title: New Hire Onboarding
---

Onboarding new hires is a very important process in any company. It's the first impression that the new hire gets from the company and it's the first impression that the company gets from the new hire. It's also a very important process for the new hire to get to know the company and the people in it.

## What is happening today?

Today, the onboarding usually involves some documentation and some meetings with the team. Most of the time, the new hire is left alone to read the documentation and try to understand the company's processes and tools. This is a very time consuming process and it's not very effective. The new hire is usually left with a lot of questions and it's hard to get answers to them.

## What can we do better?
Use CoCMD. CoCMD is a tool for keeping Command line shortcuts, sequences and knowhows ** AS CODE **. This means that you can easily share your knowledge with your team and community. And ofcourse, create your ** onboarding ** package and share it with your new hires.

## How to create an onboarding package?

1. Create a new directory 'onboarding' in a new company's public github repo.
2. Under that directory, create a `cocmd.yaml` file.
3. Add the following content to the `cocmd.yaml` file:

```yaml
name: new-hire
automations:
  - name: onboarding
    content: 
    description: this will setup a new dev machine for a new hire
    steps:
    - content: osx.setup-dev-common
        runner: cocmd
        title: osx setup
    - content: k8s.setup
        runner: cocmd
        title: k8s setup
    - content: docker.setup
        runner: cocmd
        title: docker setup
    - content: python.setup
        runner: cocmd
        title: python setup
    - content: conda.setup
        runner: cocmd
        title: python-conda setup
    - content: node.setup
        runner: cocmd
        title: node setup
    - content: https://confluence.acme.com/onboarding
        runner: link
        title: link to onboarding confluence
    - content: |
        # write here a bash script to create an id.pub file for me on a mac machine only if it doesn't exist
        if [ ! -f ~/.ssh/id_rsa.pub ]; then
            ssh-keygen -t rsa

            echo "copy the output of the following command and paste it in gitlab:"
            cat ~/.ssh/id_rsa.pub
        else 
            echo "id_rsa.pub already exists. you are good to go!"
        fi
        approval_message: "Are you ready to generate your ssh key?"
        runner: shell
        title: Ssh key generation
    - title: Gitlab SSH setup
      approval_message: "Copy id_rsa.pub contents and paste to gitlab settings, Ready?"
      content: https://gitlab.com/profile/keys
      runner: link
    - approval_message: "Is your Gitlab SSH key added to your Gitlab account?"
      title: git clone repos
      runner: shell
      content: |
        set -e
        mkdir -p ~/workspace/
        cd ~/workspace/
        
        # clone and install repo1
        git clone git@ggit-repo-1.git
        pushd ggit-repo-1
        pip install -r requirements.txt
        popd

        # clone and install repo2
        git clone git@ggit-repo-2.git
        pushd ggit-repo-2
        pip install -r requirements.txt
        python -m build_docs
        npm install
        npm run build
        popd
    - approval_message: "Are you ready to run the Dev Environment?"
      title: run dev environment
      runner: shell
        # run server and frontend
        cd ~/workspace
        docker-compose up -d -f repo2/docker-compose.yml
        python -m repo1 &
        npm start


```

This will create an automation called `new-hire.onboarding` that will run all the automations in the `steps` section. 
Each automation will run a different automation from the `cocmd` hub. 
We install the following technologies on the machine:
    * osx common tools
    * k8s
    * docker
    * python
    * conda
    * node

then, we automate the process of:
    * creating an ssh key
    * adding it to gitlab 
    * cloning the required repos

then, we run the required services. The entire setup should be working on devmachine.

4. Commit and push the changes to the repo. For this tutorial, we will call it `github.com/acme/new-hire`


## How to run the onboarding package?

When a new hire joins the company, he/she will get a link to the repo and will be asked to run the following command in the terminal:

```shell
cocmd install git@github.com/acme/new-hire.git
```

This will install the `new-hire` package on the new hire's machine.

Then, the new hire will run the following command:

```shell
cocmd run new-hire.onboarding
```



:::info How is that better from writing plain scripts / documentation? 

- Using CoCMD, you can easily share your routines with your team. 
- The Command line will get updated automatically when you update the package.
- Less work for you to explain where to get information.

:::

