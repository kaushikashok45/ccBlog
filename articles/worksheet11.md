1. Create a VPC with the above mentioned subnet configurations - 2 public and 2 private subnets.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_1.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_2.png "a title")</span>
<br>
<br>

2. Create a Internet Gateway and attach it to the VPC we created now.
<br>
<br>
<br>
<br>
<span>![Alt text](../res/images/AWS_EX33_3.png "a title")</span>
<br>
<br>
<br>
<br>
<span>![Alt text](../res/images/AWS_EX33_4.png "a title")</span>
<br>
<br>
<br>
<br>
<span>![Alt text](../res/images/AWS_EX33_5.png "a title")</span>
<br>
<br>

3. Now we have to create a NAT Gateway for private subnets. Also allocate the elastic IP.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_6.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_7.png "a title")</span>
<br>
<br>

4. Then select the default Route Table of our VPC and add route to our Internet Gateway. Then associate the route table to the public subnets.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_8.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_9.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_10.png "a title")</span>
<br>
<br>

5. Now create a separate Route Table for NAT Gateway and edit the route. Then associate the route table for our private subnets.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_11.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_12.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_13.png "a title")</span>
<br>
<br>

6. Now our VPC is done. For more details, refer my previous blog.
<br>
<br>

7. Now we have to create 2 EC2 instances for our private subnets as we did in the previous blog. Also created a security group "loadb-sg" . Then in advanced details navigate to user data and paste the below code in one instance:
<br>
<br>

    #!/bin/bash yum install httpd -y systemctl enable httpd echo “<h1>This is instance 1 - GOKUL </h1>” >/var/www/html/index.html systemctl start httpd

<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_14.png "a title")</span>
<br>
<br>

Similarly for the instance 2 create for respective private subnet and in user data paste the following code:
<br>
<br>
    #!/bin/bash yum install httpd -y systemctl enable httpd echo “<h1>This is instance 2 - GOKUL </h1>” >/var/www/html/index.html systemctl start httpd

<br>
<br>

8. Now go to LOAD BALANCER section and create a load balancer and choose application load balancer.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_15.png "a title")</span>
<br>
<br>

9. Configure with the below inputs and map the respective subnets and available zone.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_16.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_17.png "a title")</span>
<br>
<br>

10. Create a Target group and add the EC2 instances in the group. Then Register Target Group.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_18.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_19.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_20.png "a title")</span>
<br>
<br>

11. Then add the above created target group to our load balancer and finish the creation.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_21.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_22.png "a title")</span>
<br>
<br>

12. Security Group of our Load balancer should be added to the security group of our EC2 instances in the inbound rules with Http Protocol.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_23.png "a title")</span>
<br>
<br>

13. Check for Target Group Health Status. If they are healthy, we are good to go to test our load balancer.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_24.png "a title")</span>
<br>
<br>

14. Go to load balancer and copy-paste the url in DNS field in a browser.
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX33_25.png "a title")</span>
<br>
<br>

