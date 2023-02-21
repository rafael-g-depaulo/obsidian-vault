https://snow-dev.com/posts/ecs-cd-with-codepipeline-in-terraform.html
https://www.architect.io/blog/2021-03-30/create-and-manage-an-aws-ecs-cluster-with-terraform/
https://www.nanoshots.com.br/2019/06/terraform-ecs-codepipeline-entregando.html

## Build
[AWS CodeBuild: Container buildspec](https://d1.awsstatic.com/events/reinvent/2019/REPEAT_2_Best_practices_for_CICD_using_AWS_Fargate_and_Amazon_ECS_CON333-R2.pdf)

```yaml
version: 0.2
phases:
	build:
		commands:
		- $(aws ecr get-login --no-include-email)
		- docker build -t $IMAGE_NAME:$IMAGE_TAG .
		- docker tag $IMAGE_NAME:$IMAGE_TAG $ECR_REPO:$IMAGE_TAG
		- docker push $ECR_REPO:$IMAGE_TAG
```


## Deploy
[Deployments on an Amazon ECS Compute Platform](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps-ecs.html) might be the best place to start looking into deploy

Actually [Tutorial: Deploy an Amazon ECS service](https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-ecs-deployment.html) is probably even more direct
