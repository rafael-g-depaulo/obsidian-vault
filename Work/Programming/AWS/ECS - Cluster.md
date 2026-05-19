From AWS's "getting started with ECS":
> An Amazon ECS cluster is a logical grouping of tasks or services. You can use clusters to isolate your applications. This way, they don't use the same underlying infrastructure. When your tasks run on Fargate, your cluster resources are also managed by Fargate.

## Create a Cluster
![[Pasted image 20230210165635.png]]

Add a name for the cluster, and pay close attention to what VPC you're creating it in. It's important that the cluster, it's containers & the load balancer are on the same VPC
![[Pasted image 20230210165805.png]]

Fargate FTW!
![[Pasted image 20230210165832.png]]
