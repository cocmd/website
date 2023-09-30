---
sidebar_position: 1
title: Daily Routines
---


Usually, every team has a set of routines and procedures that are executed on a regular basis.
This can also be called "playbooks" or "runbooks". 

CoCMD can help you automate these routines and make them available to your team.

## What is happening today?

Today, these routines are usually documented in a wiki or a confluence page. 
The team members need to read the documentation and execute the steps manually.

What is wrong with that?
1. New employee will need to read the documentation and may miss some steps.
2. When things change, the documentation is not updated and the team members are not aware of the changes.

## What can we do better?

Use CoCMD. CoCMD is a tool for keeping Command line shortcuts, sequences and knowhows ** AS CODE **. This means that you can easily share your knowledge with your team and community. And ofcourse, create your ** routines ** package and share it with your team.

## How to create a routines package?

1. Create a new directory 'routines' in a a company's private github repo.
2. Under that directory, create a `cocmd.yaml` file.
3. Add the following content to the `cocmd.yaml` file:

```yaml
name: routines
automations:
    -   name: prod-rollback
        content: 
            description: rollback a microservice in prod
            params: 
            - name: jenkins_url
                save: true
            - name: jenkins_user
                save: true
            - name: jenkins_pass
                save: true
            - name: microservice_to_rollback
                save: false
            steps:
            - runner: shell
                title: rollback
                approval_message: "Are you sure you want to rollback {{microservice_to_rollback}}?"
                content: |
                jenkins-run-build.sh "{{jenkins_url}}" "csp_rollback_{{microservice_to_rollback}}" "{{jenkins_user}}" "{{jenkins_pass}}"
            - runner: shell
                title: test deploy
                content: |
                jenkins-run-build.sh "{{jenkins_url}}" "csp_rollback_{{microservice_to_rollback}}_test" "{{jenkins_user}}" "{{jenkins_pass}}"

    - name: cleanup
      content: 
        description:  cleanup local system
        steps:
        - content: |
            # cleanup old docker images
            docker image prune -a -f
            # cleanup old docker volumes
            docker volume prune -f
            # cleanup old docker networks
            docker network prune -f

            # empty trash
            rm -rf ~/.Trash/*

          runner: shell
          title: cleanup local system

    - name: oncall
      content: 
        description: daily oncall routine
        params: 
        - name: jenkins_url
          save: true
        - name: jenkins_user
          save: true
        - name: jenkins_pass
          save: true
        - name: kubectx_username
          save: true
        steps:
        - content: jenkins-lastbuild-check.sh "{{jenkins_url}}" "automation_tests" "{{jenkins_user}}" "{{jenkins_pass}}"
          runner: shell
          title: check failed automation tests
        - content: prometheus-checks.sh prd
          runner: shell
          title: check metrics in prd
        - content: |
            kubectx prd
            check-pods-restarts.sh prd
            check-mem-requirements.sh prd
            check-api-stats.sh prd
          runner: shell
          title: check infra in prd
```

4. Commit and push the changes to the repo. For this tutorial, we will call it `github.com/acme/routines`

## How to run the routines package?

Every Developer in the team will run the following command in the terminal:

```shell
cocmd install git@github.com/acme/routines.git
```

Now, every developer in the team will have the following automations available as commands in their terminal:
* `routines.prod-rollback`
* `routines.cleanup`
* `routines.oncall`



:::info How is that better from writing plain scripts / documentation? 

- Using CoCMD, you can easily share your routines with your team. 
- The Command line will get updated automatically when you update the package.
- Less work for you to explain where to get information.

:::

