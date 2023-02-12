From AWS's "getting started with ECS":
> A task definition is a text file that describes one or more containers that form your application. It's in JSON format. You can use it to describe up to 10 containers. The task definition functions as a blueprint for your application. It specifies the various parameters for it. For example, you can use it to specify parameters for the OS, which containers to use, which ports to open for your application, and the data volumes to use with the containers in the task. The specific parameters available for your task definition depend on the needs of your specific application.
> 
> Your entire application stack doesn't need to be on a single task definition. In fact, we recommend spanning your application across multiple task definitions. You can do this by combining related containers into their own task definitions, each representing a single component.

![[Pasted image 20230204145844.png]]

## Task
A task is the instantiation of a task definition inside a cluster. After you create a task definition for your application in Amazon ECS, you can specify the number of tasks to run on your cluster. You can run a standalone task, or you can run a task as part of a service.

## Creating a Task definition

![[Pasted image 20230210171315.png]]

Add a name and however many containers you need, taking care of the Image URI (see: [[ECR - Image]]), container name, port and ENV.
![[Pasted image 20230210171701.png]]

Then chose if the task will run on Fargate or EC2, determine the task's hardware requirements and roles for it to be able to access things like RDS and S3 storage
![[Pasted image 20230210172001.png]]

Then just hit next and create and GG!
