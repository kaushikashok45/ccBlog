**Requirement:**

EC2 Machine on a particular region.
<br>
<br>
Previously on the lab exercise, I already created an AWS account and launched an EC2 machine. Now I am going to create an EBS volume and connect it to my EC2 machine. This is done to get extra storage for our instances.
<br>
<br>
To make those EBS volumes usable in the instances, we need to mount it to a specific folder. Now let's see how to do that.
<br>
<br>

**Create an EBS Volume:**
<br>
<br>

**Step - 1:** Open AWS web console and go to the EC2 dashboard. Then select Volume option under Elastic Block Store option.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_1.png "a title")</span>
<br>
<br>

**Step - 2:** By selecting 'Create Volume', create a new EBS volume.

<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_2.png "a title")</span>
<br>
<br>

**Step - 3:** Input the details like Volume type, Size, Availability Zone as per your needs. Ensure that the availability zone is same as our EC2 instance's region. Then Create Volume.

<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_3.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_4.png "a title")</span>
<br>
<br>

**Attach the EBS Volume to our Instance:**

<br>
<br>

**Step - 5:** Right click on the created volume to get the options and then select "Attach Volume".
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_5.png "a title")</span>
<br>
<br>

**Step - 6:** Now Start your instance and select the instance under the Instances field. Then click Attach Volume. Successfully Attached our EBS volume to our Instance.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_6.png "a title")</span>
<br>
<br>
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_7.png "a title")</span>
<br>
<br>

**Mount the Volume:**

**Step - 7:** Now go to terminal if you use mac, and login to your instance as we did in the previous experiment.
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_8.png "a title")</span>
<br>
<br>

**Step - 8:** To list the available disks, use the following code:
<br>
<br>
    lsblk
<br>
<br>

**Step - 9:** Check if the volume has any data using the command:
<br>
<br>
    sudo file -s /dev/xvdf
<br>
<br>

**Step - 10:** Format the volume to either "ext4" or "xfs" by either of the following code correspondingly:
<br>
<br>
    sudo mkfs -t ext4 /dev/xvdf
<br>
    sudo mkfs -t xfs /dev/xvdf
<br>
<br>

**Step - 11:** Create a directory by any name "ashokVolume" and mount it to our ext4 volume.
<br>
<br>
    sudo mkdir /ashokVolume
<br>
<br>

**Step - 12:** Mount the created volume to "ashokVolume" directory:
<br>
<br>
    sudo mount /dev/xvdf /ashokVolume/
<br>
<br>

**Step - 13:** Change the directory to "ashokVolume" directory.
<br>
<br>
    cd /ashokVolume
<br>
<br>

To check the disk space in our "ashokVolume" directory and to verify our

mounted volume:
<br>
<br>
    df -h
<br>
<br>
<span >![Alt text](../res/images/AWS_EX22_9.png "a title")</span>
<br>
<br>    