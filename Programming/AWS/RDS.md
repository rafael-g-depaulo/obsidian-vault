
## Create minimum MySQL RDS instance
following this video works well:

![How to Create a MySQL Database on AWS RDS and Connect from Local Machine (2025) - YouTube](https://www.youtube.com/watch?v=Acgdf58Rm6M)


### Step by Step

#### 1. Create DB
1. AWS RDS -> Create DB -> MySQL (no aurora mysql compatible).
2. instance rds.t4g.micro
3. everything on minimum or turned off
4. set as public
5. setup admin user login and db name

#### 2. Edit security group (was created automatically when creating DB)
Add rule for anywhere (0.0.0.0), allow port 3306 for any TCP.

#### 3. when instance is created, get endpoint
The endpoint will show up like below
![[Pasted image 20251121215429.png]]
