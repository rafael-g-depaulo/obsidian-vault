Target Groups are used as targets for load balancers. They contain a pool of apps that the load balancer distributes loads between.

You create them in the EC2 page.

When creating one, chose the instance type, add a target group name and select the VPC where your apps reside
![[Pasted image 20230210164022.png]]

Add targets from your running apps (and define what ports can be accessed)
![[Pasted image 20230210164119.png]]

Then create the target group.
![[Pasted image 20230210164155.png]]