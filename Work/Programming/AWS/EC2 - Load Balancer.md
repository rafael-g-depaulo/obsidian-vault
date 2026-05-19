To create a load balancer, go to EC2 -> Load Balancers and click here.
![[Pasted image 20230210162940.png]]

You'll usually want an Application Load Balancer (works on the top network layer: application (HTTP/HTTPS))
![[Pasted image 20230210163137.png]]

Give it a name and **make sure to select the VPC where your apps/services will reside**.
![[Pasted image 20230210163327.png]]

You'll usually want to remove the default security group and add a group containing `EC2ContainerService` (for use with containerized apps).

![[Pasted image 20230210163608.png]]

Next you'll want to create and select a [[EC2 - Target Group]]
![[Pasted image 20230210163848.png]]

Then just create and GG!
![[Pasted image 20230210164329.png]]