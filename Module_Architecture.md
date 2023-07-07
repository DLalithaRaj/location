# Module Architecture
## Microservices

 ### .env
  Environmental variables for current microservice api are configured.Every microservices-> .env file contains its own port value and other configurable environmental values. 

 ### main
  In main.ts file respective microservice applications are started with configured port number.Middleware for this specific microservice is applied in this main.ts file.

 ### controller
  Controllers are entry point for the Rest API.Controllers handling the incoming requests and returning responses to client.We can validate the authorization and input params in controllers before initiating the further process.Incoming requests are handled by respective REST methods like POST,GET,PUT,DELETE.

### service
 All the business logics are maintained in service file. Once the incoming request successfully validated in controller it redirects to respective service function where input params are processed and business logics are applied.

### repository
Repository files are created manually to segregate and maintain the database functionalities in separate file.All the database releavent queries are executed here and these functions are accessible only from service files

### module
module.ts file is the root for the every module.External modules and files are accessible into our modules by importing it in @module({imports:[]}) decorator.To access our files outside of module we need to export it by @Module({exports:[]}) decorator.

### interface
interface.ts are created manually to maintain the user defined typed objects which are used to define input and ouput params of functions and variables.

### gql
 All the Graphql releavent files are maintained in gql Folder.This folder contains resolver.ts,input.ts,output.ts file.
 
* #### Resolver
Graphql API's are handled in resolver file. In which simple get queries are handled by @Query() method and the remaining data manipulation request like create,update and delete apis are handled by @mutation() method. Graphql is Schema definition language.All the inputs and output schema objects are defined in separate input.ts and ouput.ts file

* #### input
Graphql input Type objects are declared in input.ts file here objects declared along with @InputType() decorator and basic validation like mandatory,length,type are mentioned while declaring the properties. 

* #### output
Graphql output object type are mentioned in output.ts file. objects are declared along with @OutputType() decorator.

### models
  Database related schema files are maintained here

* #### model
 Database model schemas are mainitained in the name of model.ts file.In model file table columns and it properties were mentioned.

### dto 
As Nestjs is typescript based so in REST api we need to define type for input and output params.

* #### dto
In dto.ts file input and output dto objects are declared using interfaces and exported for external file usage.
