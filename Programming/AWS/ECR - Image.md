Get Image URI from a repository:
![[Pasted image 20230210171433.png]]

### Image pull throttling
A common issue when using images from DockerHub is not being able to pull images because of throttling.
![[Pasted image 20230212175510.png]]

The solution is usually to use an image from [Amazon ECR Public Gallery](https://gallery.ecr.aws/). This solution came from [this stack overflow answer](https://stackoverflow.com/a/65806626)
