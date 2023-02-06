# ECS - Elastic Container Service
Use to run docker continaers and clusters on AWS.

## Task Definitions
A task definition is a text file that describes one or more containers that form your application. It's in JSON format. You can use it to describe up to 10 containers. The task definition functions as a blueprint for your application. It specifies the various parameters for it. For example, you can use it to specify parameters for the OS, which containers to use, which ports to open for your application, and the data volumes to use with the containers in the task. The specific parameters available for your task definition depend on the needs of your specific application.

Your entire application stack doesn't need to be on a single task definition. In fact, we recommend spanning your application across multiple task definitions. You can do this by combining related containers into their own task definitions, each representing a single component.

![[Pasted image 20230204145844.png]]

## Task
A task is the instantiation of a task definition inside a cluster. After you create a task definition for your application in Amazon ECS, you can specify the number of tasks to run on your cluster. You can run a standalone task, or you can run a task as part of a service.

## Fargate vs. EC2
Fargate is serverless

## Service
You can use an Amazon ECS service to run and maintain your desired number of tasks simultaneously in an Amazon ECS cluster. Here's how it works: If any of your tasks fail or stop for any reason, the Amazon ECS service scheduler launches another instance based on your task definition. It does this to replace it and thereby maintain your desired number of tasks in the service.

Services are then basically a declarative way of saying how live tasks should work, and AWS makes sure it stays like that

## Links
- [AWS ECS intro course](https://explore.skillbuilder.aws/learn/course/233/play/11700)
- [Getting Started with AWS ECS](https://explore.skillbuilder.aws/learn/course/13597/play/60846/getting-started-with-amazon-elastic-container-service-v010100)