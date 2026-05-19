From AWS's "getting started with ECS":
> You can use an Amazon ECS service to run and maintain your desired number of tasks simultaneously in an Amazon ECS cluster. Here's how it works: If any of your tasks fail or stop for any reason, the Amazon ECS service scheduler launches another instance based on your task definition. It does this to replace it and thereby maintain your desired number of tasks in the service.

Services are then basically a declarative way of saying how live tasks should work, and AWS makes sure it stays like that

## Create a Service
On the page for the cluster where the service will be, click the create button on the services tab
![[Pasted image 20230210172437.png]]

Define that it's a Service (continuous), not a Task (terminates). Chose what task definition to use, add a name and chose how many instances there should be
![[Pasted image 20230210172731.png]]

**IMPORTANT!** make sure that your VPC is the same as your Cluster & Load Balancer
![[Pasted image 20230210172908.png]]

postgres
Z65Ahkr5OAK5lRDZnGYA
