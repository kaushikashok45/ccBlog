Storage virtualization is the pooling of physical storage from multiple storage devices into what appears to be a single storage device -- or pool of available storage capacity -- that is managed from a central console. The technology relies on software to identify available storage capacity from physical devices and to then aggregate that capacity as a pool of storage that can be used by traditional architecture servers or in a virtual environment by virtual machines
<br>
<br>
The virtual storage software intercepts input/output (I/O) requests from physical or virtual machines and sends those requests to the appropriate physical location of the storage devices that are part of the overall pool of storage in the virtualized environment. To the user, the various storage resources that make up the pool are unseen, so the virtual storage appears like a single physical drive, share or logical unit number (LUN) that can accept standard reads and writes.
<br>
<br>
The steps involved in setting up storage virtualization in AWS are as follows:
<br>
<br>
<br>
1.Create storage gateway in AWS
<br>
<span >![Alt text](../res/images/AWS_SV_1.png "a title")</span>
<br>
<br>
2.Check gateway configuration
<br>
<span >![Alt text](../res/images/AWS_SV_2.png "a title")</span>
<br>
<br>
3.Set-up fileshare configuration
<br>
<span >![Alt text](../res/images/AWS_SV_3.png "a title")</span>
<br>
<br>
4.Set up S3 storage bucket
<br>
<span>![Alt text](../res/images/AWS_SV_4.png "a title")</span>
<br>
<br>
5.Check S3 bucket configuration
<br>
<span>![Alt text](../res/images/AWS_SV_5.png "a title")</span>
<br>
<br>
6.Check S3 bucket storage configuration
<br>
<span>![Alt text](../res/images/AWS_SV_6.png "a title")</span>
<br>
<br>
7.Check S3 bucket file access settings
<br>
<span>![Alt text](../res/images/AWS_SV_7.png "a title")</span>
<br>
<br>
8.Storage gateway dashboard
<br>
<span>![Alt text](../res/images/AWS_SV_8.png "a title")</span>