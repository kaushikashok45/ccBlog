**Requirements:**

AWS Account
<br>
ISO image
<br>
Putty(Linux) / Remote desktop sever connection(windows)
<br>
Putty Gen
<br>
<br>
**Aim:**
<br>
To create an EC2 instance using AWS.
<br>
<br>
<br>

**Procedure:**
<br>
· First Step is to create account in AWS.
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_1.png "a title")</span>
<br>
<br>
<br>
<br>
Then the next step is to create a Key-Pair. Click on the EC2 console and it will open the EC2 Dashboard.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_2.png "a title")</span>
<br>
<br>
<br>
<br>
Choose Key Pairs and in the next tab select the 'Create Key Pair' option at the top.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_3.png "a title")</span>
<br>
<br>
<br>
<br>
Once you have filled the key pair name and chose the other options click 'Create Key Pair'. And then your key pair will be created and a .ppk file (the file format you chose before) with the private key will be downloaded automatically.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_4.png "a title")</span>
<br>
<br>
<br>
<br>
Then the next step is to create a Security Group.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_5.png "a title")</span>
<br>
<br>
<br>
<br>
Let's add HTTP, HTTPS, SSH rules in Inbound rules and let the outbound rules as default. Now create security group.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_6.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_7.png "a title")</span>
<br>
<br>
<br>
<br>
Now the pre-requisite setup is completed. Let's launch an instance now.
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_8.png "a title")</span>
<br>
<br>
<br>
Click on 'Launch Instance' on EC2 Dashboard.
<br>
<br>
Now give a name to the server. Then select a Amazon Machine Image. Here I am selecting an HVN version of Amazon Linux 2. Under 'Instance Type', as default it will be as t2.micro which I am going to leave as such. Then under Key pair box, select the Key pair which you created previously. Do the same for Security Group by selecting the option 'Select Existing Security Group' and choose it.
<br>
<br>
After all the above configurations, click the 'Launch Instance' at the right.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX11_8.png "a title")</span>
<br>
<br>
Successfully an Instance has been created.