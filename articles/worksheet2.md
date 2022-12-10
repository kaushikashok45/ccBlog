Amazon Web Services (AWS) is one of the most comprehensive and broadly adopted cloud service providers in the industry, offering over 200 fully featured services from data centers globally. A large spectrum of clients across verticals uses AWS to lower costs, become more agile and innovate faster. A recent survey estimates that AWS is the largest cloud service provider and accounts for 32% of the worldwide cloud services market.
<br>        
While AWS provides a vast spectrum of services, it can be challenging to determine the right services for your needs. This article provides details of the top 10 most popular service offerings from AWS and how they map to different business needs.
<br>
<br>
**Services offered by AWS**
<br>
<br>
1.<u>AWS RDS – Relational Database Service</u>
<br>
Almost all applications deployed in AWS will need access to a database. This is where AWS’ Relational Database Service (RDS) fits in. RDS is a managed service from AWS using which you can set up, operate and scale a relational database in the cloud easily. As with EC2, Amazon RDS is available as several predefined database instance types – optimized for memory, performance or I/O. You can also pick the database engine of your choice from the six supported technologies including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and Microsoft SQL Server. One of the key advantages of RDS is that the managed service automates time-consuming administration tasks such as hardware provisioning, database setup, patching and backups.
<br>
<br>
Typical use cases of AWS RDS include:
<br>
<br>
-Deploy a new database server in a matter of minutes while significantly increasing reliability and uptime without associated overhead or personnel costs. Good fit for OLTP/ transactional, moderately complex day-to-day database requirements.
<br>
<br>
-You can customize the configuration for each database deployment with a number of database engines (MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server). Set up automatic failover (multi-AZ RDS set-up), automated backups, and resize your database deployments seamlessly in line with traffic and application requirements. Allows you to focus on the application instead of managing the database.
<br>
<br>
-Use RDS in conjunction with NoSQL databases such as DynamoDB (for low-latency/ high-traffic use cases) or Amazon OpenSearch Service (for text and unstructured data).
<br>
<br>
2.<u>AWS Lambda</u>
<br>
<br>
AWS Lambda is an event-driven, serverless computing service that lets you run code without provisioning or managing servers. With Lambda, you can upload your code as a ZIP file or container image, and Lambda automatically and precisely allocates compute execution power and runs your code based on the incoming request or event. You can write Lambda functions in your favorite language (Node.js, Python, Go, Java, and more) and use both serverless and container tools, such as AWS SAM or Docker CLI, to build, test, and deploy your functions.
<br>
<br>
Typical use cases of AWS Lambda include:
<br>
-Image transformation for newly uploaded images.
<br>
-Real-time metric data processing.
<br>
-Streaming data validation, filtering, and transformation.
<br>
<br>
3.<u>AWS S3 – Simple Storage Service</u>
<br>
<br>
Amazon S3 or Amazon Simple Storage Service is a service that provides is cloud-based persistent storage through a web service interface. It’s built to store, protect and retrieve data from “buckets” at any time, from anywhere, on any device.Amazon S3 is a simple key-based object-store. It enables you to simply put data in the cloud and pull it back out through standard REST- and SOAP-based web service APIs. You are shielded from the details of how it is stored or where it is actually stored. When you store data, you assign a unique object key that can later be used to retrieve the data. Keys can be any string, and they can be constructed to mimic hierarchical attributes.
<br>
Typical use cases of AWS S3 include:
<br>
<br>
-Archive old data that is infrequently accessed. Good alternative for on-premises NAS (Network Attached Storage) or external hard disks. Helps keep your data safe and secure without the risk of data loss.
<br>
-With S3 Intelligent-Tiering, you can automatically move data to the most cost-effective access tier without performance impact or operational overhead.
<br>
-Store both static and dynamic assets such as user-generated content (images), backup files, raw event data/ logs (example: JSON or XML) in S3. Take the load off web servers and serve via highly available and redundant locations around the world. You also get regional support for storing assets in particular locations around the world to comply with regulatory commitments.
<br>
<br>
4.<u>AWS DynamoDB – NoSQL Database Services</u>
<br>
<br>
DynamoDB is Amazon’s NoSQL database solution that supports document and key-value data models. It’s a fully managed, multi-region, multi-active, durable database with built-in security, backup and restore, and in-memory caching for internet-scale applications.
<br>
<br>
You get built in automatic backup and restore, security, and multiregion, multimaster distribution along with in-memory caching.
<br>
<br>
Typical use cases of AWS DynamoDB include:
<br>
<br>
-DynamoDB is an ideal fit for internet-scale mobile, web, gaming, IoT, retail, media, and entertainment applications that require single-digit millisecond low latency data access and need to support petabytes of data.
<br>
<br>
-DynamoDB can automatically scale up/ down, and provides ACID transactions support.
<br>
<br>
-Your DBAs do not need to provision, patch, or manage servers. There’s no software to install, maintain, or operate.
<br>
<br>
5.<u>AWS EC2</u>
<br>
<br>
Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. Amazon EC2’s simple web service interface allows you to obtain and configure capacity quickly and with minimum effort.
<br>
EC2 provides a set of predefined instance profiles, or virtual server definitions, to create virtual machines. You can choose your VM configurations from any of the predefined instance types. VM instances can be memory-optimized, compute-optimized, or storage-optimized.
<br>
Users can also create and customize instance profiles to suit their needs. Instances can be self-provisioned or auto-scaled (when integrated with Amazon Auto Scaling) on demand, and stopped when not required, thereby saving costs.
<br>
EC2 instances can also be used to deploy containers. You can deploy and manage your own cluster of EC2 instances for running the containers.
<br>
The list of EC2 instance types is available here. You can choose between:
<br>
1.General Purpose
<br>
<br>
2.Compute Optimized
<br>
<br>
3.Memory Optimized
<br>
<br>
4.Storage Optimized
<br>
<br>
5.Accelerated Computing instance types
<br>
<br>
Typical use cases of AWS EC2 include:
<br>
-Host a variety of software from simple web sites to enterprise-grade web applications on a on-demand infrastructure. Easy to lift-and-shift from on-premises since you have full control of the operating system. Spot pricing can help save up to 80-90% on hosting costs.
<br>
<br>
-Create fault tolerant architecture with auto-scaling and load balancing options.
<br>
<br>
-If you need heavy computation and GPU power for deep learning/ machine learning, choose EC2 accelerated computing instances.
<br>
<br>
